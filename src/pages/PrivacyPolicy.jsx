import React from "react";
import { Helmet } from "react-helmet";

function PrivacyPolicy() {
  return (
    <div className="lg:mt-24">
      <Helmet>
        <title>Gift_Market Place | Privacy Policy</title>
      </Helmet>
      <div className="w-full h-[50vh] bg-gray-800 flex justify-center items-center text-center">
        <h1 className="font-bold text-[50px] yellow-color-text">
          Privacy Policy
        </h1>
      </div>

      <div className="w-full text-center px-5 py-5 lg:p-10 flex flex-col justify-center items-center">
        <h2 className="text-[40px] font-bold pb-2">Our Policies</h2>
        <p className="w-11/12 lg:w-2/3 font-semibold text-justify ">
          Our search engine takes the privacy and security of our users very
          seriously. This Privacy Policy explains how we collect, use, and
          protect your personal information when you use our search engine.
          Information We Collect We may collect certain information about you
          when you use our search engine. This may include: Your search queries
          and search historyYour IP address and browser typeCookies and other
          similar technologies that allow us to identify your browser or
          deviceOther information that you provide to us, such as your name or
          email address when you contact us.How We Use Your Information We use
          the information we collect to provide you with a better search
          experience, including: Improving the relevancy and accuracy of search
          resultsCustomizing search results and recommendations based on your
          preferencesDetecting and preventing fraud and other security
          threats.We may also use your information for other purposes, such as
          marketing and advertising, but we will always give you the option to
          opt out of these communications. Sharing Your Information We may share
          your information with third-party service providers that help us
          operate our search engine, such as hosting providers or analytics
          services. We may also share your information with law enforcement
          agencies or other authorized third parties if we believe it is
          necessary to comply with a legal obligation or protect our legal
          rights. Your Choices You can control the information we collect and
          use in a number of ways, including: Opting out of cookies or similar
          technologies in your browser settingsUsing private browsing modes or
          other tools to limit the information that is collected about
          youContacting us to request access, correction, or deletion of your
          personal information.Security We take reasonable measures to protect
          your personal information from unauthorized access or disclosure.
          However, no method of transmission over the internet or method of
          electronic storage is completely secure, and we cannot guarantee
          absolute security. Changes to this Policy We may update this Privacy
          Policy from time to time to reflect changes in our practices or legal
          requirements. We will notify you of any material changes to this
          policy by posting a notice on our website or by sending you an email.
          Contact Us If you have any questions or concerns about this Privacy
          Policy or our practices, please contact us at:
          <b className="ml-1">Demo@Demo.com</b>
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
