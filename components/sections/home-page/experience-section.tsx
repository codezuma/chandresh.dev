import { experiences } from '@/lib/experiences';
import { cn } from '@/lib/utils';
import LinkText from '@/components/ui/link';
import Container from '@/components/ui/container';

interface ExperienceItemProps extends React.HTMLAttributes<HTMLDivElement> {
  experienceTitle?: React.ReactNode | string;
  experienceDescription?: string[];
  experienceOrg?: {
    name?: React.ReactNode | string;
    link?: React.ReactNode | string;
    websiteDisplayName?: React.ReactNode | string;
  };
  experienceStatus?:
  | 'current'
  | {
    startAt?: React.ReactNode | string;
    endAt?: React.ReactNode | string;
  };
}

const ExperienceSection: React.FunctionComponent = () => {
  return (
    <Container
      className="experience-section grid grid-cols-1 mt-16 justify-start gap-4">
      <h2 className="about-heading  leading-snug font-semibold text-base ">
        {'Worked as.'}
      </h2>
      <main className="experience-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-8">
        {experiences.map(
          (experience: ExperienceItemProps, experienceIndex: number) => (
            <ExperienceItem {...experience} key={experienceIndex} />
          ),
        )}
      </main>
    </Container>
  );
};

const ExperienceItem: React.FunctionComponent<ExperienceItemProps> = ({
  experienceTitle,
  experienceDescription,
  experienceOrg,
  experienceStatus,
  className,
  ...attr
}) => {
  return (
    <div
      className={cn(
        'experience-item border-l-2 pl-4 hover:border-teal-700  dark:hover:border-teal-300  cursor-default transition-all',
        className,
      )}
      {...attr}>
      <div className="flex flex-row items-start justify-between max-md:flex-col max-md:justify-start max-md:gap-2">
        <span>
          <h3 className="experience-title font-normal capitalize ">
            {experienceTitle + ', ' + experienceOrg?.name}
          </h3>
          <p className="experience-org-details-wrapper text-sm flex flex-row items-center justify-start gap-1.5">
            {'at, '}
            {typeof experienceOrg?.link === 'string' ? (
              <LinkText
                className="font-normal text-sm"
                href={experienceOrg?.link}
                target={'_blank'}>
                {experienceOrg?.websiteDisplayName}
              </LinkText>
            ) : (
              <span className="font-normal text-sm">
                {experienceOrg?.websiteDisplayName}
              </span>
            )}
          </p>
        </span>
        <p className="experience-status font-normal text-secondary-foreground text-sm">
          {typeof experienceStatus === 'string' &&
            experienceStatus === 'current' &&
            experienceStatus}
          {typeof experienceStatus === 'object' && (
            <span className="experience-status-duration-wrapper">
              {experienceStatus?.startAt + '-' + experienceStatus?.endAt}
            </span>
          )}
        </p>
      </div>
      <ul className="experience-description-list-content-wrapper mt-4 flex flex-col items-start justify-start gap-2 pl-3">
        {experienceDescription?.map((descriptionItem, descriptionIndex) => (
          <li
            className="font-normal text-zinc-700 dark:text-zinc-200 text-sm list-disc list-outside"
            key={descriptionIndex}>
            {descriptionItem}
          </li>
        ))}

      </ul>
    </div>
  );
};

export default ExperienceSection;
export type { ExperienceItemProps };
