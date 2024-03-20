import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PropsWithChildren } from "react";
interface LinkTextProps extends LinkProps {
  children?: React.ReactNode;
  className?: string;
  target?: "_blank" | "_parent" | "_self" | "_top";
}

export const AnimatedArrow = ({ className }: PropsWithClassName) => {
  return <div className={cn("relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden", className)}>
    <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
      <ArrowUpRight className="h-4 w-4 text-secondary-foreground" />
      <ArrowUpRight className="h-4 w-4 -translate-x-3 text-secondary-foreground" />
    </div>
  </div>

};
const LinkText: React.FunctionComponent<LinkTextProps> = ({
  className,
  target,
  ...attr
}) => {
  return (
    <Link
      className={cn(className)}
      {...attr}
      target={target}
    >

      <button className="group relative inline-flex h-12 items-center justify-center rounded-md  px-2 font-medium text-secondary-foreground">
        <span>{attr?.children}</span>
        <AnimatedArrow />
      </button>
    </Link>
  );
};

export default LinkText;
