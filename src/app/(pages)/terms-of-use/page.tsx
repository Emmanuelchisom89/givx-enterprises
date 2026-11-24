import Link from "next/link";
import { ArrowLeft, ArrowUpRight, FileText } from "lucide-react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "acceptance", title: "Acceptance of These Terms" },
  { id: "website-use", title: "Permitted Use of the Website" },
  { id: "intellectual-property", title: "Intellectual Property" },
  { id: "business-information", title: "Business and Brand Information" },
  { id: "external-links", title: "External Websites and Links" },
  { id: "submissions", title: "Enquiries and Submissions" },
  { id: "availability", title: "Website Availability" },
  { id: "disclaimer", title: "Disclaimer of Warranties" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "indemnification", title: "Indemnification" },
  { id: "privacy", title: "Privacy" },
  { id: "changes", title: "Changes to These Terms" },
  { id: "governing-law", title: "Governing Law" },
  { id: "contact", title: "Contact Information" },
];

function TermsSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-[#E8E3DA] py-10 md:py-12"
    >
      <h2 className="mb-5 font-serif text-2xl tracking-[-0.025em] md:text-3xl">
        {title}
      </h2>

      <div className="space-y-5 text-sm leading-8 text-[#69645D] md:text-[15px]">
        {children}
      </div>
    </section>
  );
}

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F2EC] text-[#171717]">
      {/* PAGE INTRODUCTION */}
      <section className="container-shell pb-16 pt-16 md:pt-24 md:pb-20">
        <div className="max-w-4xl">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#81796F] transition-colors hover:text-[#A18A69]"
          >
            <ArrowLeft size={14} />
            Back to home
          </Link>

          <div className="mb-7 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#DCD4C8] text-[#A18A69]">
              <FileText size={19} strokeWidth={1.5} />
            </div>

            <p className="section-eyebrow">Legal Information</p>
          </div>

          <h1 className="font-serif text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.96] tracking-[-0.045em]">
            Terms of
            {/* <br /> */} <span className="text-[#A18A69]"> Use.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#69645D] md:text-lg">
            These terms explain the conditions that apply when you access or use
            the Givx Enterprises website. Please take a moment to read them
            before using the website.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.14em] text-[#8B847A]">
            <span>Last updated: 24 November 2026</span>
            <span>Givx Enterprises</span>
          </div>
        </div>
      </section>

      {/* TERMS CONTENT */}
      <section className="border-t border-[#E5DFD5] bg-white">
        <div className="container-shell grid gap-12 py-14 md:py-20 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A18A69]">
              On this page
            </p>

            <nav aria-label="Terms of use sections">
              <ul className="space-y-4">
                {sections.map((section, index) => (
                  <li key={section.id}>
                    <a
                      href={`#${section.id}`}
                      className="group flex items-start gap-3 text-xs leading-5 text-[#817B73] transition-colors hover:text-[#A18A69]"
                    >
                      <span className="text-[10px] tabular-nums text-[#B7AEA2]">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span>{section.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </aside>

          {/* TERMS BODY */}
          <article className="min-w-0 max-w-3xl">
            <div className="mb-10 border-l-2 border-[#A18A69] bg-[#F8F6F2] px-6 py-5">
              <p className="text-sm leading-7 text-[#69645D]">
                These terms apply to the Givx Enterprises website and its
                informational content. They do not automatically govern separate
                transactions, products, or services offered through
                independently operated businesses or third-party websites.
              </p>
            </div>

            <TermsSection id="introduction" title="1. Introduction">
              <p>
                Welcome to the website of Givx Enterprises (&quot;Givx&quot;,
                &quot;we&quot;, &quot;our&quot;, or &quot;us&quot;).
              </p>

              <p>
                This website provides information about Givx Enterprises, its
                business activities, brands, and related opportunities.
              </p>

              <p>
                These Terms of Use govern your access to and use of this
                website, including its pages, content, and available features.
              </p>
            </TermsSection>

            <TermsSection id="acceptance" title="2. Acceptance of These Terms">
              <p>
                By accessing or using this website, you agree to comply with
                these Terms of Use and any applicable laws and regulations.
              </p>

              <p>
                If you do not agree with these terms, you should discontinue
                using the website.
              </p>

              <p>
                We may revise these terms from time to time. Continued use of
                the website after revised terms are published means that you are
                using the website subject to the updated terms, to the extent
                permitted by applicable law.
              </p>
            </TermsSection>

            <TermsSection
              id="website-use"
              title="3. Permitted Use of the Website"
            >
              <p>
                You may use this website for lawful, personal, informational,
                and legitimate business purposes.
              </p>

              <p>You agree not to:</p>

              <ul className="list-disc space-y-3 pl-5 marker:text-[#A18A69]">
                <li>
                  Use the website in violation of applicable laws or
                  regulations.
                </li>
                <li>
                  Attempt to gain unauthorised access to the website, its
                  systems, or related infrastructure.
                </li>
                <li>
                  Interfere with the security, availability, or proper operation
                  of the website.
                </li>
                <li>
                  Introduce malicious code, harmful software, or other
                  disruptive material.
                </li>
                <li>
                  Copy, reproduce, distribute, or commercially exploit website
                  content without appropriate permission.
                </li>
                <li>
                  Use the website in a way that infringes the rights of Givx or
                  another person.
                </li>
              </ul>

              <p>
                We reserve the right to take reasonable steps to protect the
                website and our legitimate interests where misuse or
                unauthorised activity is identified.
              </p>
            </TermsSection>

            <TermsSection
              id="intellectual-property"
              title="4. Intellectual Property"
            >
              <p>
                Unless otherwise stated, the content and materials presented on
                this website, including written content, design elements,
                graphics, logos, branding, and original visual materials, belong
                to Givx Enterprises or are used with appropriate permission.
              </p>

              <p>
                These materials are protected by applicable intellectual
                property laws.
              </p>

              <p>
                You may view and use the website for its intended informational
                purposes. You may not reproduce, modify, republish, distribute,
                or commercially use protected materials without prior permission
                from the relevant rights holder, except where permitted by law.
              </p>

              <p>
                Third-party names, trademarks, logos, and materials remain the
                property of their respective owners.
              </p>
            </TermsSection>

            <TermsSection
              id="business-information"
              title="5. Business and Brand Information"
            >
              <p>
                Information about Givx Enterprises and its brands is provided
                for general informational purposes. We make reasonable efforts
                to keep website content relevant and accurate, but business
                information, activities, brand offerings, and organisational
                details may change over time.
              </p>

              <p>
                Descriptions on this website should not be treated as a
                guarantee that a particular product, service, opportunity, or
                business arrangement is currently available.
              </p>

              <p>
                Any separate commercial arrangement or transaction will be
                subject to its own applicable terms and conditions.
              </p>
            </TermsSection>

            <TermsSection
              id="external-links"
              title="6. External Websites and Links"
            >
              <p>
                This website may contain links to third-party websites,
                including websites operated by brands, service providers, or
                other organisations.
              </p>

              <p>
                These links are provided for convenience and informational
                purposes. Givx Enterprises does not necessarily own, operate,
                endorse, or control those external websites or their content.
              </p>

              <p>
                When you follow an external link, you do so at your own
                discretion. Your use of an external website is subject to that
                website&apos;s own terms, policies, and practices.
              </p>
            </TermsSection>

            <TermsSection id="submissions" title="7. Enquiries and Submissions">
              <p>
                You may use the communication details published on this website
                to make general enquiries or express interest in business
                opportunities.
              </p>

              <p>
                Any information you provide should be accurate, lawful, and
                relevant to your enquiry. You should not submit confidential
                information, passwords, financial credentials, or sensitive
                personal information through general enquiry channels.
              </p>

              <p>
                The contact form currently displayed on this website is a
                frontend demonstration and does not transmit or store submitted
                messages. A confirmation displayed after submission does not
                mean that Givx Enterprises has received your enquiry.
              </p>

              <p>
                Sending an enquiry does not create a partnership, employment
                relationship, agency relationship, or other contractual
                arrangement unless such an arrangement is separately agreed.
              </p>
            </TermsSection>

            <TermsSection id="availability" title="8. Website Availability">
              <p>
                We aim to keep the website accessible and functioning properly.
                However, uninterrupted availability cannot be guaranteed.
              </p>

              <p>
                Access may occasionally be affected by maintenance, updates,
                technical issues, hosting interruptions, security measures, or
                circumstances beyond our reasonable control.
              </p>

              <p>
                We may modify, suspend, or discontinue parts of the website
                where reasonably necessary.
              </p>
            </TermsSection>

            <TermsSection id="disclaimer" title="9. Disclaimer of Warranties">
              <p>
                This website and its content are provided for general
                informational purposes and, to the extent permitted by
                applicable law, on an &quot;as is&quot; and &quot;as
                available&quot; basis.
              </p>

              <p>
                While we take reasonable care when preparing website content, we
                do not guarantee that all information will always be complete,
                accurate, current, uninterrupted, or free from errors.
              </p>

              <p>
                Nothing in these terms excludes a warranty, guarantee, or
                consumer right that cannot lawfully be excluded under applicable
                law.
              </p>
            </TermsSection>

            <TermsSection id="liability" title="10. Limitation of Liability">
              <p>
                To the extent permitted by applicable law, Givx Enterprises will
                not be responsible for losses arising solely from your inability
                to access the website, reliance on general informational
                content, or use of external websites beyond our control.
              </p>

              <p>
                This section does not exclude or limit liability where doing so
                would be unlawful, including liability that cannot be excluded
                under applicable consumer protection or other laws.
              </p>

              <p>
                Nothing in these terms is intended to remove any rights or
                remedies you may have under applicable law.
              </p>
            </TermsSection>

            <TermsSection id="indemnification" title="11. Indemnification">
              <p>
                To the extent permitted by applicable law, you agree to be
                responsible for losses or reasonable costs directly resulting
                from your unlawful use of the website or your deliberate
                infringement of the rights of Givx Enterprises or another
                person.
              </p>

              <p>
                Nothing in this section requires you to indemnify us for losses
                caused by our own unlawful conduct or negligence where such a
                requirement would be prohibited by law.
              </p>
            </TermsSection>

            <TermsSection id="privacy" title="12. Privacy">
              <p>
                Your use of this website is also subject to our Privacy Policy,
                which explains how information may be handled in connection with
                the website.
              </p>

              <p>
                Please read our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-[#A18A69] underline underline-offset-4 transition-colors hover:text-[#171717]"
                >
                  Privacy Policy
                </Link>{" "}
                for further information.
              </p>
            </TermsSection>

            <TermsSection id="changes" title="13. Changes to These Terms">
              <p>
                We may update these Terms of Use to reflect changes in our
                website, business activities, services, or legal obligations.
              </p>

              <p>
                Updated terms will be published on this page with a revised
                date. You are encouraged to review this page periodically.
              </p>
            </TermsSection>

            <TermsSection id="governing-law" title="14. Governing Law">
              <p>
                These terms are intended to be interpreted consistently with the
                laws applicable to Givx Enterprises and its operations in
                Nigeria.
              </p>

              <p>
                Any dispute arising in connection with these terms will be
                handled by the appropriate courts or dispute-resolution
                mechanisms with jurisdiction, subject to any mandatory legal
                rights that apply.
              </p>
            </TermsSection>

            <TermsSection id="contact" title="15. Contact Information">
              <p>
                If you have questions about these Terms of Use or the operation
                of this website, you may contact Givx Enterprises using the
                details below.
              </p>

              <div className="mt-7 border border-[#E8E3DA] bg-[#F8F6F2] p-6 md:p-8">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A18A69]">
                  General enquiries
                </p>

                <h3 className="font-serif text-2xl">Givx Enterprises</h3>

                <p className="mt-4 text-sm text-[#69645D]">
                  Email: hello@givxenterprises.com
                </p>

                <p className="mt-2 text-sm text-[#69645D]">
                  Location: Lagos, Nigeria
                </p>

                <p className="mt-5 text-xs leading-6 text-[#9A9287]">
                  Note: The email address above is a placeholder and should be
                  replaced with Givx&apos;s confirmed official contact address.
                </p>
              </div>
            </TermsSection>

            {/* END NOTE */}
            <div className="mt-12 flex flex-col gap-5 border-t border-[#E8E3DA] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-[#938B80]">
                Thank you for visiting Givx Enterprises.
              </p>

              <Link
                href="/privacy-policy"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6D665D] transition-colors hover:text-[#A18A69]"
              >
                Read our privacy policy
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </Link>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
