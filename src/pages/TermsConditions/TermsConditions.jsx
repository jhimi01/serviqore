import React, { useEffect } from "react";
import Subheader from "../../components/Subheader";

export default function TermsConditions() {

  useEffect(() => {
    window.scroll(0, 0);
  }, []);


  return (
    <div className="mt-5 md:mt-20 mb-10">
      <Subheader title="Terms & Conditions" />
      <div className="md:w-10/12 w-11/12 mx-auto space-y-5 text-justify mt-10">
        <p>
          Welcome to Serviqore.com. By accessing or using our website, you agree
          to comply with and be bound by the following Terms of Service. Please
          read these terms carefully before using our website.
        </p>
        <ol className="list-decimal pl-5 space-y-5">
          <li>
            <div>
              <h3 className="font-semibold">Website Access</h3>
              <p>
                1.1. You must be at least 18 years old to access or use our
                website. By accessing or using our website, you represent and
                warrant that you are at least 18 years old.
              </p>
              <p>
                1.2. You are responsible for ensuring that your access to our
                website is lawful and does not violate any applicable laws,
                regulations, or third-party rights.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Use of Website</h3>
              <p>
                2.1. You may use our website for lawful purposes only and in
                accordance with these Terms of Service. You agree not to use our
                website in any way that violates any applicable laws or
                regulations or infringes on the rights of others.
              </p>
              <p>
                2.2. You agree not to engage in any conduct that could damage,
                disable, overburden, or impair our website or interfere with any
                other party's use of our website.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Intellectual Property</h3>
              <p>
                3.1. All content on our website, including text, graphics,
                logos, images, and software, is the property of Serviqore or its
                licensors and is protected by copyright and other intellectual
                property laws.
              </p>
              <p>
                3.2. You may not reproduce, modify, distribute, display, or
                transmit any content from our website without our prior written
                consent.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">User Content</h3>
              <p>
                4.1. You may submit comments, feedback, or other content to our
                website ("User Content"). By submitting User Content, you grant
                us a non-exclusive, royalty-free, perpetual, irrevocable, and
                fully sublicensable right to use, reproduce, modify, adapt,
                publish, translate, create derivative works from, distribute,
                and display such User Content worldwide in any media.
              </p>
              <p>
                4.2. You represent and warrant that you have the right to submit
                User Content and that your User Content does not violate any
                applicable laws or infringe on the rights of others.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Disclaimer of Warranties</h3>
              <p>
                5.1. Our website is provided on an "as is" and "as available"
                basis without any warranties of any kind, either express or
                implied. We do not guarantee the accuracy, completeness, or
                reliability of any content on our website.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Limitation of Liability</h3>
              <p>
                6.1. In no event shall Serviqore, its officers, directors,
                employees, or agents be liable to you for any indirect,
                incidental, special, consequential, or punitive damages arising
                out of or in connection with your use of our website.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Governing Law</h3>
              <p>
                7.1. These Terms of Service shall be governed by and construed
                in accordance with the laws of [your jurisdiction], without
                regard to its conflict of law principles.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Changes to Terms of Service</h3>
              <p>
                8.1. We reserve the right to modify or revise these Terms of
                Service at any time, and such changes will be effective
                immediately upon posting on our website. Your continued use of
                our website after any such changes constitutes your acceptance
                of the revised terms.
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Contact Us</h3>
              <p>
                9.1. If you have any questions, concerns, or feedback about
                these Terms of Service, please contact us at [contact email or
                address].
              </p>
            </div>
          </li>
          <li>
            <div>
              <h3 className="font-semibold">Entire Agreement</h3>
              <p>
                10.1. These Terms of Service constitute the entire agreement
                between you and Serviqore regarding your use of our website and
                supersede all prior and contemporaneous agreements,
                representations, and understandings, whether oral or written.
              </p>
            </div>
          </li>
        </ol>
        <p>By using our website, you agree to these Terms of Service.</p>
      </div>
    </div>
  );
}
