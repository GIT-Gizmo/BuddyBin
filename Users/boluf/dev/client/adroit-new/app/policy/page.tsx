import Link from "next/link"
import Balancer from "react-wrap-balancer"

const page = () => {
  return (
    <div className="flex mt-8">
      <aside className="hidden md:block md:w-48 lg:w-64 bg-gray-100 dark:bg-gray-800 p-6 rounded-sm">
        <nav className="space-y-2">
          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#"
          >
            <InfoIcon className="h-4 w-4" />
            Introduction
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#consent"
          >
            <UserIcon className="h-4 w-4" />
            Your Consent
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#info-collected"
          >
            <UserIcon className="h-4 w-4" />
            Information We Collect
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#info-usage"
          >
            <UserIcon className="h-4 w-4" />
            How Personal Information Is Used
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#info-security"
          >
            <CookieIcon className="h-4 w-4" />
            Information Security
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#terms-of-use"
          >
            <ClockIcon className="h-4 w-4" />
            Our Terms Of Use
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#policy-changes"
          >
            <RefreshCwIcon className="h-4 w-4" />
            Changes to This Privacy Policy
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#contact"
          >
            <MailIcon className="h-4 w-4" />
            Contact Information
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 rounded-md">
        <div className="text-center mt-4 mb-8">
          <h1 className="font-urbanist text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
            <Balancer>
              ADROIT CONSUMER {' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">PRIVACY POLICY</span>
            </Balancer>
          </h1>
          <p>Last updated: January 1, 2024</p>
        </div>

        <section className="mb-8" id="introduction">
          <h2 className="text-2xl font-bold">Introduction</h2>
          <p>
            Effective Date: April 22, 2021.
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            This privacy policy is being provided to you (“You” or “Your”) by Adroit handyman services. This privacy policy applies to information we receive from or about You, including personally identifiable information, In connection with your access or use of the adroit handyman service website: www.adroitservices.com and its services. This online privacy policy (this “policy”) applies only to information collected through www.adroitservices.com which it is posted. It does not apply to third party platforms, such as social media websites, vendor, pages, websites of other corporations, limited liability companies, etc. it does not apply to information collected through other channels, such as over the phone or in person.
          </p>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            This policy may be supplemented or amended from time to time by additional privacy notices (“Privacy Notices”), provided at the time we collect your information. For example, certain pages of this site may contain Privacy Notices providing more details about information we collect on those particular pages, why we need that information, and choices you may have about ways we use that information.
          </p>
        </section>

        <section className="mb-8" id="consent">
          <h2 className="text-2xl font-bold">Your Consent</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            By using this website, you are consenting to the collection, use, disclosure, and transfer of your information as described in this policy (and any Privacy Notices that apply to you). If you do not consent to the collection, use, disclosure, and transfer of your information as described in this policy (and any Privacy Notices that apply to you), you may not use this site. If you have questions about this policy, or any Privacy Notice, please contacts us.
          </p>
        </section>

        <section className="mb-8" id="info-collected">
          <h2 className="text-2xl font-bold">Information We Collect</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            We may collect different types of information about you, depending upon how you react with us. This information may include personal information, contact information and device information. We are the sole owners of the information collected on this site. We only have access to/collect information that you voluntarily give us via email or other direct contact from you. We will not sell or rent this information to anyone. We will only use your information to contact you regarding the reason you contacted us. Information collected will not be shared with a third party outside our organization, other than as necessary to fulfil your request.

          </p>
        </section>
        <section className="mb-8" id="info-usage">
          <h2 className="text-2xl font-bold">How Personal Information Is Used</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            We will only use your information to contact you regarding the reason you contacted us. Information collected will not be shared with a third party outside our organization, other than as necessary to fulfil your request.
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 text-gray-500 dark:text-gray-400">
            <li>To provide you with services and to respond to your inquiries.</li>
            <li>
              To send you newsletters, marketing or promotional materials and other information that may be of interest
              to you.
            </li>
            <li>To facilitate your purchases and processing of payments.</li>
            <li>To allow you to participate in interactive features on our Site.</li>
            <li>To send you emails about your account and/or order.</li>
            <li>To improve our Site and to better understand your needs.</li>
            <li>
              To personalize your experience and to allow us to deliver the type of content and product offerings in
              which you are most interested.
            </li>
            <li>To allow us to better service you in responding to your customer service requests.</li>
            <li>To send you emails about your account and/or order.</li>
          </ul>
        </section>
        <section className="mb-8" id="info-security">
          <h2 className="text-2xl font-bold">Information Security</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            We take precautions to protect your information. When you submit sensitive information via the website, your information is protected both online and offline. Wherever we collect sensitive information, that information is encrypted and transmitted to us in a secure way. While we use encryption to protect sensitive information transmitted online, we also protect your information offline. Only employees who need information to perform a specific job (e.g, billing or customer service) are granted access to personally identifiable information.
          </p>
        </section>

        <section className="mb-8" id="policy-changes">
          <h2 className="text-2xl font-bold">Changes to This Privacy Policy</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            We may update our privacy policy from time to time. Thus, you are advised to review this page periodically
            for any changes. We will notify you of any changes by posting the new privacy policy on this page. These
            changes are effective immediately after they are posted on this page.
          </p>
        </section>
        <section className="mb-8" id="contact">
          <h2 className="text-2xl font-bold">Contact Information</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            For any questions or concerns regarding your privacy, you may contact us using the following details:
          </p>
          <p className="mt-2 text-gray-500 dark:text-gray-400">Email: <a href="mailto:adroithandymanservice@gmail.com">adroithandymanservice@gmail.com</a></p>
        </section>

        <section className="mb-8" id="terms-of-use">
          <h2 className="text-2xl font-bold">Our Terms Of Use</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            This policy is part of the <Link href="/terms" className="transition-all border-b border-[#202020] hover:border-[#2020209A]">Terms of Use</Link> that govern your use of this site. A link to our <Link href="/terms" className="transition-all border-b border-[#202020] hover:border-[#2020209A]">Terms of Use</Link> is provided at the bottom of each page of this site.
          </p>
        </section>
      </main>
    </div>
  )
}

export default page

function ClockIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}


function CookieIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
      <path d="M8.5 8.5v.01" />
      <path d="M16 15.5v.01" />
      <path d="M12 12v.01" />
      <path d="M11 17v.01" />
      <path d="M7 14v.01" />
    </svg>
  )
}


function InfoIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M12 16v-4" />
      <path d="M12 8h.01" />
    </svg>
  )
}


function MailIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}


function RefreshCwIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
      <path d="M8 16H3v5" />
    </svg>
  )
}


function ShieldCheckIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  )
}


function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
