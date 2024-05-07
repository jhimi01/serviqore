import React, { useEffect } from "react";
import Subheader from "../../components/Subheader";

const PrivacyPolicy = () => {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (
    <div className="mt-5 md:mt-20 mb-10">
      <Subheader title="Privacy Statment" />
      <div className="md:w-10/12 w-11/12 mx-auto space-y-5 text-justify mt-10">
        <p>
          At Serviqore, we are dedicated to protecting the privacy and
          confidentiality of your personal information. This Privacy Policy
          outlines how we collect, use, share, and protect your data when you
          use our website or services. By accessing our website or using our
          services, you consent to the terms outlined in this Privacy Policy.
        </p>
        <div>
          <h3 className="font-semibold">Information We Collect</h3>
          <p>
            When you visit our website, we automatically collect certain
            information about your device, including your IP address, browser
            type, operating system, and browsing behavior. We may also collect
            information about the pages you visit, the links you click on, and
            the time and date of your visit.
          </p>
          <p>
            If you choose to contact us, sign up for our services, or subscribe
            to our newsletter, we may collect additional information from you,
            such as your name, email address, phone number, and any other
            information you choose to provide.
          </p>
        </div>
        <div className="space-y-1">
          <h3 className="font-semibold">How We Use Your Information</h3>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ol className="list-decimal space-y-5 pl-3">
            <li>
              Providing and improving our services: We use your information to
              deliver the services you request and to improve our website and
              services based on your feedback and usage patterns.
            </li>
            <li>
              Communicating with you: We may use your contact information to
              respond to your inquiries, provide customer support, send you
              updates about our services, or communicate with you about your
              account.
            </li>
            <li>
              Marketing and advertising: With your consent, we may use your
              information to send you promotional materials, newsletters, or
              other marketing communications. You can opt out of receiving
              marketing communications at any time by following the unsubscribe
              instructions included in the communication or by contacting us
              directly.
            </li>
            <li>
              Analyzing trends and user behavior: We may use your information to
              analyze trends, track user behavior, and gather demographic
              information to better understand our audience and improve our
              services.
            </li>
            <li>
              Legal compliance: We may use your information to comply with legal
              obligations, respond to legal requests, or protect our rights or
              the rights of others.
            </li>
          </ol>
        </div>
        <div>
          <h3 className="font-semibold">Data Sharing</h3>
          <p>
            We may share your personal information with third-party service
            providers who assist us in providing our services, such as hosting
            providers, email service providers, analytics services, and payment
            processors. These third parties are contractually obligated to use
            your information only as necessary to provide the services to us and
            are prohibited from using it for any other purpose.
          </p>
          <p>
            We may also share your information with law enforcement agencies,
            government authorities, or other third parties when required by law
            or to protect our rights or the rights of others.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Data Security</h3>
          <p>
            We take the security of your personal information seriously and take
            reasonable measures to protect it from unauthorized access,
            disclosure, alteration, or destruction. We use industry-standard
            security technologies and procedures to safeguard your data,
            including encryption, firewalls, and secure server configurations.
          </p>
          <p>
            Despite our efforts to protect your data, no method of transmission
            over the internet or electronic storage is 100% secure, and we
            cannot guarantee absolute security. You are responsible for
            maintaining the confidentiality of your account credentials and for
            taking appropriate measures to protect your personal information.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Your Rights</h3>
          <p>
            You have certain rights regarding your personal information,
            including the right to access, correct, or delete your data. You may
            also have the right to object to or restrict the processing of your
            data or to receive a copy of your data in a structured,
            machine-readable format. To exercise your rights or to make a
            data-related request, please contact us using the contact
            information provided below.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Cookies and Tracking Technologies</h3>
          <p>
            We may use cookies, web beacons, and other tracking technologies to
            collect information about your browsing behavior and preferences.
            Cookies are small text files that are stored on your device when you
            visit a website. They enable us to recognize your browser and
            capture certain information about your visit, such as your
            preferences and interactions with our website.
          </p>
          <p>
            You can choose to accept or reject cookies through your browser
            settings. Most browsers automatically accept cookies, but you can
            usually modify your settings to decline cookies if you prefer.
            Please note that rejecting cookies may affect your ability to access
            certain features of our website.
          </p>
          <p>
            To give the users best experience on our website, we utilize Google
            Analytics by Google, Inc. This involves the use of cookies, which
            may collect certain user information, including IP addresses, for
            site analysis, reporting, and other services. By using our site, you
            consent to Google's data processing as described above.."
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Changes to This Privacy Policy</h3>
          <p>
            We may update this Privacy Policy from time to time to reflect
            changes in our practices or legal requirements. We will notify you
            of any material changes by posting the updated policy on our website
            or by other means of communication. Your continued use of our
            website or services after the effective date of the updated policy
            constitutes your acceptance of the changes.
          </p>
        </div>
        <div>
          <h3 className="font-semibold">Contact Us</h3>
          <p>
            If you have any questions, concerns, or requests regarding this
            Privacy Policy or our data practices, please contact us at{" "}
            <a className="text-blue-500 hover:underline">info@serviqore.com.</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
