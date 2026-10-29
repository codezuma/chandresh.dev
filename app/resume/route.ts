import { NextResponse, type NextRequest } from 'next/server';
import fs from 'fs';
import path from 'path';

// /resume serves public/resume.pdf; /resume?role=<id> serves public/resumes/<id>.pdf
// (ids from resumes/resumes.json, e.g. product, mobile, ai) and falls back to the default.
export async function GET(request: NextRequest) {
  const role = request.nextUrl.searchParams.get('role');
  const candidates = [
    ...(role && /^[a-z0-9-]+$/.test(role) ? [path.join(process.cwd(), 'public', 'resumes', `${role}.pdf`)] : []),
    path.join(process.cwd(), 'public', 'resume.pdf'),
  ];

  const filePath = candidates.find(candidate => fs.existsSync(candidate));
  if (!filePath) {
    return new NextResponse('Resume not found', { status: 404 });
  }

  return new NextResponse(fs.readFileSync(filePath), {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': `inline; filename="${path.basename(filePath)}"`,
    },
  });
}
