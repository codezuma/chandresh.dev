import { cn } from "@/lib/utils";
import React from "react";
import Container from "@/components/ui/container";
import { contactItems } from "@/lib/contact";
import Link from "next/link";
import LinkText from "@/components/ui/link";

interface ContactItemProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  link?: {
    display?: string;
    url?: string;
  };
}

const ContactSection: React.FunctionComponent = () => {
  return (
    <Container>
      <h2 className="contact-heading  mt-12 leading-snug font-medium text-base text-zinc-900">
        {"contact, socials."}
      </h2>
      <main className="project-item-list-wrapper mt-4 grid grid-cols-1 justify-start gap-4">
        {contactItems.map((contact, contactIndex) => (
          <ContactItem {...contact} key={contactIndex} />
        ))}
      </main>
    </Container>
  );
};

const ContactItem: React.FunctionComponent<ContactItemProps> = ({
  title,
  link,
  className,
  ...attr
}) => {
  return (
    <div
      className={cn(
        "contact-item flex flex-row items-center justify-start gap-4",
        className
      )}
      {...attr}
    >
      <span className="contact-title font-normal text-sm">{title}</span>
      <span className="contact-link-content">
        {link?.url && (
          <LinkText className="text-sm font-normal text-zinc-500" href={link?.url}>
            {link?.display}
          </LinkText>
        )}
        {!link?.url && (
          <span className="text-sm font-normal text-zinc-500">
            {"link not found"}
          </span>
        )}
      </span>
    </div>
  );
};

export default ContactSection;
export type { ContactItemProps };
