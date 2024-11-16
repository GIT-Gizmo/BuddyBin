import Link from "next/link"
import Balancer from "react-wrap-balancer"

const page = () => {
  return (
    <div className="flex mt-8">
      <aside className="hidden md:block md:48 lg:w-64 bg-gray-100 dark:bg-gray-800 p-6 rounded-sm">
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
            href="#accept"
          >
            <UserIcon className="h-4 w-4" />
            Acceptance Of Our Privacy Policy
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#link-terms"
          >
            <UserIcon className="h-4 w-4" />
            Links
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#warranty"
          >
            <UserIcon className="h-4 w-4" />
            Limited Warranty
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#rights"
          >
            <CookieIcon className="h-4 w-4" />
            Ownership Rights
          </Link>

          <Link
            className="flex items-center gap-2 rounded-md bg-gray-200 px-3 py-2 text-sm font-medium transition-colors hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600"
            href="#terms-of-use"
          >
            <ClockIcon className="h-4 w-4" />
            Subscription And Payment Terms
          </Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 rounded-md">
        <div className="text-center mt-4 mb-8">
          <h1 className="font-urbanist text-xl font-extrabold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
            <Balancer>
              TERMS & {' '}
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">CONDITIONS</span>
            </Balancer>
          </h1>
        </div>

        <section className="mb-8" id="introduction">
          <h2 className="text-2xl font-bold">Terms Of Use</h2>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            These Terms of Use apply to all users of this site. When you visit our website, you automatically agree to abide by our privacy policy and agree to be legally bound by our Terms of Services. Adroit handyman service reserves the right to revise these terms at any time by updating this post. You are advised to visit this page periodically to review the terms as they are binding. It is also your responsibility to provide the appropriate resources to gain access to our website.
          </p>
        </section>

        <section className="mb-8" id="accept">
          <h2 className="text-2xl font-bold">Acceptance Of Our Privacy Policy</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            By agreeing to these Terms of Use, you agree to the terms of our Privacy policy, which is expressly incorporated herein. Before using this site, please carefully review our privacy policy. All information provided to us as a result of your use of this site will be handled in accordance with our privacy policy.
          </p>
        </section>

        <section className="mb-8" id="link-terms">
          <h2 className="text-2xl font-bold">Links</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Please be aware that this web site contains links to other sites and we are not responsible for the content or privacy practices of such sites. We thereby encourage our users to be aware of the privacy statements of any other site that collects personal identifiable information when they leave our site.
          </p>
        </section>

        <section className="mb-8" id="warranty">
          <h2 className="text-2xl font-bold">LIMITED WARRANTY</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            WE PROVIDE THIS WEBSITE AND ITS CONTENT “AS IS” AND WITHOUT ANY REPRESENTATION OR WARRANTY, EXPRESS, IMPLIED, OR STATUTORY. WE SPECIFICALLY DISCLAIM ANY IMPLIED WARRANTIES OF TITLE, MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WITHOUT LIMITING THE FOREGOING, WE DO NOT REPRESENT OR WARRANT THAT THIS WEBSITE WILL BE AVAILABLE WITHOUT INTERRUPTION, OR ANY CONTENT FROM THIS WEBSITE OR THE SERVER THAT MAKES THE WEBSITE AVAILABLE ARE FREE FROM ERRORS, DEFECTS, DESIGN FLAWS, OMISSIONS, VIRUSES, OR OTHER HARMFUL COMPONENTS. YOUR USE OF THIS WEBSITE IS AT YOUR OWN RISK.
          </p>
        </section>

        <section className="mb-8" id="rights">
          <h2 className="text-2xl font-bold">Ownership Rights</h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400">
            All the contents of this site are protected under applicable intellectual property and other laws, including without limitation to the laws of United States, Nigeria and other countries. All content associated with Adroit Handyman Service and intellectual property rights of this web site are the property of Adroit Handyman Service. other trademarks, logos, and images that are not associated with Adroit handyman service are the property of their respective owner.
          </p>
        </section>

        <section className="mb-8" id="subscription">
          <h2 className="text-2xl font-bold">Subscription And Payment Terms</h2>

          <ul className="list-alpha list-inside ml-4 mt-2">
            <li className="text-xl font-bold">
              Subscription

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                You will take full responsibility for the payment of any fees that implies your requested service at the time you book an appointment or subscribe to a plan (whether monthly or annual plan) as applicable (Commencement Date). Be aware all fees for projects and services are non-refundable. No contract will exist between you and the company for the services until the company accepts your order by a confirmatory email, text message, or other appropriate means of communication.
              </p>
            </li>

            <li className="text-xl font-bold">
              Payment

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                You agree to pay all fees or charges to your account in accordance with the fees, charges, and billing terms in effect at the time a fee or charge is due and payable. We partner with Paystack to manage payments; by using our service you agree to provide Paystack with a valid debit/credit card (Visa, MasterCard, or any other issuer accepted by us) (&apos;payment provider&apos;) and also agree to paystack&apos;s <Link href="https://paystack.com/terms" className="transition-all border-b border-[#202020] hover:border-[#2020209A]">Terms of service</Link>. Your payment provider agreement governs your use of the designated debit/credit card, and you must refer to that agreement and not to the terms to determine your rights and liabilities. By providing paystack with your debit/credit card details and other payment information, you agree that the company is authorized to immediately invoice your Account for all fees and charges due and payable to the company hereunder with no additional notice or consent required. You agree to immediately update your payment details in paystack if there is any change of the debit/credit card used for payment hereunder. The company reserves the right at any time to change its prices and billing methods, either immediately upon posting on the company properties or by email delivery to you.
              </p>
            </li>

            <li className="text-xl font-bold">
              Free Trials And Other Promotions

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Any free trial or other promotion that provides user access to the services must be used within the specified time of the trial. At the end of the trial period, your use of the service will expire and any further use of the service is prohibited unless you pay the applicable subscription fee.
              </p>

              <h3 className="text-xl font-bold">Your Obligation</h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                In consideration of your use of this site, you agree that to the extent you provide personal information to Adroit Handyman Service it will be true, accurate, current, and complete and that you will update all personal information as necessary. You agree to use this Site in a manner consistent with any and all applicable rules and regulations. You agree not to upload or transmit through this site any computer viruses, Trojan horses, worms or anything else designed to interfere with, interrupt or disrupt the normal operating procedures of a computer. Any unauthorized modification, tampering or change of any information, or any interference with the availability of or access to this Site is strictly prohibited. We reserve all rights and remedies available to us.
              </p>

              <h3 className="text-xl font-bold">Waiver</h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                Our failure at any time to require performance of any provision of these Terms of Use or to exercise any right provided for herein will not be deemed a waiver of such provision or such right. All waivers must be in writing. Unless the written waiver contains an express statement to the contrary, no waiver by of any breach of any provision of these Terms of Use or of any right provided for herein will be construed as a waiver of any continuing or succeeding breach of such provision, a waiver of the provision itself, or a waiver of any right under these Terms of Use.
              </p>

              <h3 className="text-xl font-bold">Severability</h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                If any provisions of these Terms of Use is held by a court of competent jurisdiction to be contrary to law, such provision will be changed and interpreted so as to best accomplish the objectives of the original provision to the fullest extent allowed by law and the remaining provisions of these Terms of use will remain in full force an effect.
              </p>

              <h3 className="text-xl font-bold">Entire Agreement</h3>

              <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                These Terms of Use (together with our Privacy Policy and any Privacy Notices) contain the entire understanding between you an Adroit Handyman Service with respect to this site and supersede all previous communications, negotiation, and agreements, whether oral, written, or electronic, between you and Adroit Handyman Services with respect to this site and your use of this site.
              </p>
            </li>
          </ul>
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
