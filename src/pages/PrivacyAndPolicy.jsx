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
        <h3 className="subheading">How We Use Your Information</h3>
        <p>
          We use the collected information for various purposes, including:
          Providing and maintaining our services Personalizing your experience
          Processing payments Analyzing website usage and trends Improving our
          website and services Responding to inquiries and support requests
        </p>
        <h3 className="subheading">Information Sharing and Disclosure</h3>
        <p>
          We may share your information with: Third-party service providers
          Business partners Legal authorities if required by law
        </p>
        <h3 className="subheading">Security</h3>
        <p>
          We employ industry-standard security measures to protect your personal
          information. However, no method of transmission over the internet or
          electronic storage is entirely secure.
        </p>
        <h3 className="subheading">Your Choices</h3>
        <p>
          You have the right to: Access, correct, or delete your personal
          information Opt-out of receiving promotional communications Disable
          cookies in your browser settings
        </p>
        <h3 className="subheading">Third-Party Links</h3>
        <p>
          Our website may contain links to third-party sites. We are not
          responsible for the privacy practices or content of these sites.
        </p>
        <h3 className="subheading">Changes to This Privacy Policy</h3>
        <p>
          We may update our Privacy Policy periodically. We will notify you of
          any changes by posting the new policy on this page.
        </p>
        <h3 className="subheading">Contact Us</h3>
        <p>
          If you have any questions about this Privacy Policy, please contact us
          at [your contact email].
        </p>
      </div>
    </div>
  );
}

export default PrivacyAndPolicy;
