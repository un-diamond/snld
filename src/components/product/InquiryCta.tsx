import Link from "next/link";
import { siteConfig } from "@/data/site";
import { mailtoInquiry } from "@/lib/links";

type InquiryCtaProps = {
  sku?: string;
};

export function InquiryCta({ sku }: InquiryCtaProps) {
  const mailto = mailtoInquiry(sku);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      {mailto ? (
        <a href={mailto} className="btn-primary">
          Inquire by email
        </a>
      ) : null}
      <Link href="/contact" className="btn-ghost">
        Contact
      </Link>
    </div>
  );
}
