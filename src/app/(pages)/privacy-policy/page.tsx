import Link from "next/link";
import { ArrowLeft, ArrowUpRight, ShieldCheck } from "lucide-react";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "information", title: "Information We Collect" },
  { id: "how-we-use", title: "How We Use Information" },
  { id: "contact-form", title: "Contact Form and Enquiries" },
  { id: "cookies", title: "Cookies and Website Technologies" },
  { id: "third-party", title: "Third-Party Services and Links" },
  { id: "data-security", title: "Data Security and Retention" },
  { id: "your-rights", title: "Your Privacy Rights" },
  { id: "children", title: "Children's Privacy" },
  { id: "changes", title: "Changes to This Policy" },
  { id: "contact", title: "Contact Us" },
];

function PolicySection({
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

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#F5F2EC] text-[#171717]">
      {/* PAGE INTRODUCTION */}
      <section className="container-shell pb-16 pt-24 md:pb-20">
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
              <ShieldCheck size={19} strokeWidth={1.5} />
            </div>
            <p className="section-eyebrow">Legal Information</p>
          </div>

          <h1 className="font-serif text-[clamp(3.4rem,7vw,6.5rem)] leading-[0.96] tracking-[-0.045em]">
            Privacy
            {/* <br /> */}{" "}
            <span className="text-[#A18A69]">Policy.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-[#69645D] md:text-lg">
            Your privacy matters to us. This policy explains how Givx
            Enterprises handles information when you visit our website, interact
            with its features, or contact us.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 text-[11px] uppercase tracking-[0.14em] text-[#8B847A]">
            <span>Last updated: 24 November 2026</span>
            <span>Givx Enterprises</span>
          </div>
        </div>
      </section>

      {/* POLICY CONTENT */}
      <section className="border-t border-[#E5DFD5] bg-white">
        <div className="container-shell grid gap-12 py-14 md:py-20 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-20">
          {/* TABLE OF CONTENTS */}
          <aside className="lg:sticky lg:top-28 lg:h-fit">
            <p className="mb-6 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A18A69]">
              On this page
            </p>

            <nav aria-label="Privacy policy sections">
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

          {/* POLICY BODY */}
          <article className="min-w-0 max-w-3xl">
            <div className="mb-10 border-l-2 border-[#A18A69] bg-[#F8F6F2] px-6 py-5">
              <p className="text-sm leading-7 text-[#69645D]">
                This policy describes the website&apos;s current information
                practices. Some features, including the contact form, may change
                as the website develops. We will update this policy when our
                information practices change.
              </p>
            </div>

            <PolicySection id="introduction" title="1. Introduction">
              <p>
                Givx Enterprises (&quot;Givx&quot;, &quot;we&quot;,
                &quot;our&quot;, or &quot;us&quot;) respects the privacy of
                visitors to our website and is committed to handling personal
                information responsibly.
              </p>
              <p>
                This Privacy Policy applies to information associated with your
                use of the Givx Enterprises website. It explains the types of
                information that may be processed, why it may be used, and the
                choices available to you.
              </p>
              <p>
                By using this website, you acknowledge that you have had the
                opportunity to read this policy.
              </p>
            </PolicySection>

            <PolicySection id="information" title="2. Information We Collect">
              <p>
                The information involved in your visit depends on how you
                interact with the website.
              </p>

              <h3 className="font-semibold text-[#302D29]">
                Information you provide
              </h3>
              <p>
                If you contact us through an available communication channel,
                you may choose to provide information such as your name, email
                address, telephone number, organisation, and the contents of
                your enquiry.
              </p>

              <h3 className="font-semibold text-[#302D29]">
                Technical information
              </h3>
              <p>
                When you access a website, the hosting infrastructure and
                related technical services may process information needed to
                deliver, secure, and maintain the website. Depending on the
                services involved, this may include IP address, browser type,
                device information, requested pages, and access timestamps.
              </p>

              <h3 className="font-semibold text-[#302D29]">
                Information we do not currently request
              </h3>
              <p>
                This website does not currently provide user accounts, online
                purchases, or payment processing. You should not submit payment
                details, passwords, or sensitive personal information through
                general enquiry channels.
              </p>
            </PolicySection>

            <PolicySection id="how-we-use" title="3. How We Use Information">
              <p>
                Where information is provided to us or processed through the
                operation of this website, it may be used for purposes such as:
              </p>
              <ul className="list-disc space-y-3 pl-5 marker:text-[#A18A69]">
                <li>Responding to questions and business enquiries.</li>
                <li>
                  Communicating about potential partnerships or opportunities.
                </li>
                <li>Operating, maintaining, and protecting the website.</li>
                <li>Identifying and addressing technical issues or misuse.</li>
                <li>Meeting applicable legal or regulatory obligations.</li>
              </ul>
              <p>
                We do not describe or use information for purposes unrelated to
                the reason it was provided, except where permitted or required
                by applicable law.
              </p>
            </PolicySection>

            <PolicySection
              id="contact-form"
              title="4. Contact Form and Enquiries"
            >
              <p>
                The contact form currently displayed on this website is a
                frontend demonstration. It does not transmit submitted
                information to Givx Enterprises, send an email, or store
                submissions on a server.
              </p>
              <p>
                Therefore, submitting the current demonstration form does not
                mean that Givx has received your enquiry. Please use the
                published contact details or another confirmed communication
                channel to reach us.
              </p>
              <p>
                If the contact form is connected to an email service or another
                processing system in the future, information submitted through
                it may be processed to receive, review, and respond to
                enquiries. This policy will be updated to describe the actual
                arrangement before or when that functionality is introduced.
              </p>
            </PolicySection>

            <PolicySection
              id="cookies"
              title="5. Cookies and Website Technologies"
            >
              <p>
                Cookies are small files that websites may place on a
                visitor&apos;s device. Similar technologies can be used to
                support website functionality, remember preferences, measure
                usage, or improve performance.
              </p>
              <p>
                We have not identified an active analytics or advertising
                tracking implementation for the current website. If analytics,
                advertising technologies, or non-essential cookies are
                introduced, this policy and any required consent arrangements
                will be updated accordingly.
              </p>
              <p>
                You can also manage cookies through your browser settings.
                Disabling certain cookies may affect how some websites function.
              </p>
            </PolicySection>

            <PolicySection
              id="third-party"
              title="6. Third-Party Services and Links"
            >
              <p>
                Our website is hosted using third-party infrastructure. The
                hosting provider may process technical information necessary to
                deliver and protect the website, subject to its own terms and
                privacy practices.
              </p>
              <p>
                The website may also contain links to external websites,
                including websites operated by brands or other organisations
                associated with Givx Enterprises. These external websites
                operate independently and have their own privacy policies and
                practices.
              </p>
              <p>
                We encourage visitors to review the privacy information of any
                external website they choose to visit. Givx Enterprises is not
                responsible for the privacy practices of independently operated
                websites.
              </p>
            </PolicySection>

            <PolicySection
              id="data-security"
              title="7. Data Security and Retention"
            >
              <p>
                We take reasonable steps to protect information handled in
                connection with our business and website. However, no method of
                transmission or electronic storage can be guaranteed to be
                completely secure.
              </p>
              <p>
                Where we receive personal information through a communication
                channel, we intend to retain it only for as long as reasonably
                necessary for the purpose for which it was received, or as
                required by applicable law.
              </p>
              <p>
                Retention periods may depend on the nature of the enquiry, any
                ongoing business relationship, and applicable legal obligations.
              </p>
            </PolicySection>

            <PolicySection id="your-rights" title="8. Your Privacy Rights">
              <p>
                Depending on the laws that apply to you and the circumstances of
                the processing, you may have rights concerning your personal
                information. These may include the right to:
              </p>
              <ul className="list-disc space-y-3 pl-5 marker:text-[#A18A69]">
                <li>Request access to personal information held about you.</li>
                <li>
                  Request correction of inaccurate or incomplete information.
                </li>
                <li>Request deletion of information where applicable.</li>
                <li>Object to or request restriction of certain processing.</li>
                <li>Withdraw consent where processing is based on consent.</li>
                <li>
                  Raise a concern with the relevant data protection authority.
                </li>
              </ul>
              <p>
                These rights are subject to applicable legal conditions and
                exceptions. You can contact us using the details provided below
                to make a privacy-related request.
              </p>
            </PolicySection>

            <PolicySection id="children" title="9. Children's Privacy">
              <p>
                This website is intended for a general audience and is not
                specifically directed at children. We do not knowingly seek to
                collect personal information from children through this website.
              </p>
              <p>
                If you believe that a child has provided personal information to
                us, please contact us so that the matter can be reviewed.
              </p>
            </PolicySection>

            <PolicySection id="changes" title="10. Changes to This Policy">
              <p>
                We may update this Privacy Policy as the website, our business
                activities, or applicable legal requirements change.
              </p>
              <p>
                When changes are made, the revised policy will be published on
                this page with an updated date. We encourage visitors to review
                this page periodically.
              </p>
            </PolicySection>

            <PolicySection id="contact" title="11. Contact Us">
              <p>
                If you have questions about this Privacy Policy or wish to make
                a privacy-related request, you can contact Givx Enterprises
                using the details below.
              </p>

              <div className="mt-7 border border-[#E8E3DA] bg-[#F8F6F2] p-6 md:p-8">
                <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#A18A69]">
                  Privacy enquiries
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
                  replaced with Givx&apos;s confirmed official contact address
                  before the policy is treated as final.
                </p>
              </div>
            </PolicySection>

            {/* END NOTE */}
            <div className="mt-12 flex flex-col gap-5 border-t border-[#E8E3DA] pt-8 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-xs leading-6 text-[#938B80]">
                Thank you for taking the time to understand how we approach
                privacy.
              </p>

              <Link
                href="/terms-of-use"
                className="group inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.15em] text-[#6D665D] transition-colors hover:text-[#A18A69]"
              >
                Read our terms of use
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
