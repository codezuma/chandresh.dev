import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};
const Container = ({ children, className }: Props) => {
  return (
    <section className={cn("max-w-3xl px-4 mx-auto", className)}>{children}</section>
  );
};

export default Container;
