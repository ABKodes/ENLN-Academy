import React from "react";

function PrivacyAndPolicy() {
  return (
    <div>
      <div className="mx-auto w-11/12 border border-gray-400 p-10 shadow-sm lg:w-10/12">
        <div className="mb-5 flex w-full flex-col items-center space-y-2 border-b-2 py-2">
          <h1 className="heading  ">Privacy And Policy</h1>
          <h2 className="font-bold">Last Updated on March 8,2024</h2>
        </div>
        <p className="text">
          Welcome to ENLN. Your privacy is important to us. This Privacy Policy
          is designed to help you understand how we collect, use, disclose, and
          safeguard your personal information. By using our website, you consent
          to the practices described in this Privacy Policy.
        </p>
        <div className="w-full space-y-2">
          <h1 className="subheading">Information We Collect</h1>
          <ul className="list-decimal px-5">
            <li className="text">Personal Information</li>
            <p>
              We may collect personal information, such as: Name Email address
              Contact information Payment details for premium services
            </p>
            <li className="text">Usage Data</li>
            <p>
              We collect information on how you interact with our website,
              including:
              <ul className="mb-2 list-disc px-5">
                <li>Log files </li>
                <li>IP address</li>
                <li>Browser type</li>
                <li>Pages visited Date and time of access</li>
              </ul>
            </p>
            <li className="text">Cookies and Similar Technologies</li>
            <p>
              We use cookies and similar technologies to enhance your user
              experience and collect data for analytics.
            </p>
          </ul>
        </div>
        <div className="space-y-2">
          <h3 className="subheading">How We Use Your Information</h3>
          <p>
            We use the collected information for various purposes, including:
            Providing and maintaining our services Personalizing your experience
            Processing payments Analyzing website usage and trends Improving our
            website and services Responding to inquiries and support requests.
          </p>
          <ul className="list-disc space-y-2 pl-8 text-start">
            <li>
              Providing the Site and our Services. We use Personal Data which
              you provide to us in order to allow you to access and use the Site
              and in order to provide any information, products, or Services
              that you request from us.
            </li>
            <li>
              Technical support and security. We may use Personal Data to
              provide technical support to you, where required, and to ensure
              the security of our Services and the Site.
            </li>
            <li>
              Updates. We use Personal Data collected when you sign-up for our
              various email or update services to send you the messages in
              connection with the Site or Content Offerings. We may also archive
              this information and/or use it for future communications with you,
              where we are legally entitled to do so.
            </li>
            <li>
              Research. We may share general course data (including quiz or
              assignment submissions, grades, and forum discussions),
              information about your activity on our Site, and demographic data
              from surveys operated by us with our Content Providers and other
              business partners so that our Content Providers and other business
              partners may use the data for research related to online
              education.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="subheading">Information Sharing and Disclosure</h3>
          <p>
            We may share your information with: Third-party service providers
            Business partners Legal authorities if required by law
          </p>
        </div>
        <div>
          <h3 className="subheading">Security</h3>
          <p>
            We will use industry standard physical, technical, and
            administrative security measures to keep your Personal Data
            confidential and secure, and will not share it with third parties,
            except as otherwise provided in this Privacy Notice, or unless such
            disclosure is necessary in special cases, such as a physical threat
            to you or others, as permitted by applicable law. Because the
            Internet is not a 100% secure environment, we cannot guarantee the
            security of Personal Data, and there is some risk that an
            unauthorized third party may find a way to circumvent our security
            systems or that transmission of your information over the Internet
            will be intercepted. It is your responsibility to protect the
            security of your login information. Please note that e-mail
            communications are typically not encrypted and should not be
            considered secure.
          </p>
        </div>
        <div>
          <h3 className="subheading">Your Choices</h3>
          <p>
            You have the right to: Access, correct, or delete your personal
            information Opt-out of receiving promotional communications Disable
            cookies in your browser settings
          </p>
        </div>
        <div>
          <h3 className="subheading">Third-Party Links</h3>
          <p>
            Our website may contain links to third-party sites. We are not
            responsible for the privacy practices or content of these sites.
          </p>
        </div>
        <div></div>
        <h3 className="subheading">Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy periodically. We will notify you of
          any changes by posting the new policy on this page.
        </p>
        <h3 className="subheading">Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at{" "}
        </p>
        <a href="https://mail.google.com/" className="hover:underline-custom">
          enlninstitute.com
        </a>{" "}
        .
      </div>
    </div>
  );
}

export default PrivacyAndPolicy;
