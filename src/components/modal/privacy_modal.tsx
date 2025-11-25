import { useEffect } from "react";
import bg from "../../assets/footer/contactbg.png";
import cardbg from "../../assets/footer/privacybg.png";

export default function PrivacyModal({
  setPrivacyModal,
}: {
  setPrivacyModal: (open: boolean) => void;
}) {
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow || "";
    };
  }, []);

  return (
    <div
      className="px-20 z-[9999] bg-white/30 backdrop-blur-sm w-full h-screen fixed inset-0 flex items-center justify-center cursor-pointer"
      onClick={() => setPrivacyModal(false)}
    >
      <div
        className=" bg-white py-10 px-10 w-full cursor-auto flex-col gap-10 flex items-center justify-start rounded-[15px]"
        onClick={(e) => e.stopPropagation()}
        style={{
          backgroundImage: `url(${bg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row gap-2 items-center justify-center max-w-[584px]">
          <span className="font-cormo text-[64px]/[120%] italic">Privacy</span>
          <span className="font-subito font-bold text-[64px]/[120%]">
            Policy
          </span>
        </div>
        <div
          className="flex px-20 pt-15 pb-10 w-full justify-center items-center rounded-[15px] bg-black"
          style={{
            backgroundImage: `url(${cardbg})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className=" max-h-[500px] overflow-scroll font-subito text-white flex flex-col gap-10 p-3">
            <p className="text-[29px]/[120%] font-light">
              Welcome to MavCanvas (referred to as "MavCanvas," "we," "us," or
              "our"). This Privacy Policy explains how we collect, use,
              disclose, and safeguard your information when you visit our
              website, [Your Website URL Here], or use our digital agency
              solutions.
              <br />
              <br />
              By accessing or using our Service, you agree to the terms of this
              Privacy Policy.
            </p>

            <ol className="list-decimal list-inside space-y-3 mt-3 text-[29px]/[120%] font-light">
              <li>
                <strong className="font-semibold">
                  Information We Collect
                </strong>
                <div className="ml-4 mt-1">
                  <p>A. Information You Voluntarily Provide</p>
                  <p>
                    Contact data (name, email, phone, company), professional
                    data (job title, website, project details), and
                    correspondence (messages and attachments).
                  </p>
                  <p>B. Information Collected Automatically (Usage Data)</p>
                  <p>
                    Log data (IP address, browser, device, OS, pages visited,
                    timestamps) and cookies/tracking technologies.
                  </p>
                </div>
              </li>

              <li>
                <strong>How We Use Your Information</strong>
                <div className="ml-4 mt-1">
                  <p>
                    To provide and maintain the Service, communicate (support,
                    updates), send marketing (with consent), perform analytics
                    and improvements, and enhance security.
                  </p>
                </div>
              </li>

              <li>
                <strong>
                  Sharing Your Information (Third-Party Disclosure)
                </strong>
                <div className="ml-4 mt-1">
                  <p>
                    We may share data with service providers (hosting, payments,
                    analytics), when legally required, or in connection with
                    business transfers (merger, acquisition).
                  </p>
                </div>
              </li>

              <li>
                <strong>Security of Data</strong>
                <div className="ml-4 mt-1">
                  <p>
                    We implement reasonable technical and organizational
                    measures to protect Personal Data, but no transmission or
                    storage method is 100% secure.
                  </p>
                </div>
              </li>

              <li>
                <strong>Cookies Policy</strong>
                <div className="ml-4 mt-1">
                  <p>
                    We use cookies for functionality (preferences), performance
                    (analytics), and marketing. You may accept or refuse cookies
                    via your browser settings.
                  </p>
                </div>
              </li>

              <li>
                <strong>Your Data Protection Rights</strong>
                <div className="ml-4 mt-1">
                  <p>
                    Depending on applicable law (e.g., GDPR), you may have the
                    right to access, rectify, erase, object to processing, or
                    withdraw consent. To exercise these rights, contact us using
                    the details below.
                  </p>
                </div>
              </li>

              <li>
                <strong>Changes to This Privacy Policy</strong>
                <div className="ml-4 mt-1">
                  <p>
                    We may update this policy from time to time. We will post
                    changes on this page and update the "Last Updated" date.
                    Please review periodically.
                  </p>
                </div>
              </li>

              <li>
                <strong>Contact Us</strong>
                <div className="ml-4 mt-1">
                  <p>
                    By Email:{" "}
                    <a
                      className="underline"
                      href="mailto:privacy@mavcanvas.com"
                    >
                      privacy@mavcanvas.com
                    </a>
                  </p>
                  <p>By Mail: [Your Agency Physical Address]</p>
                  <p>By Phone: [Your Agency Phone Number]</p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
