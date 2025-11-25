import { useEffect } from "react";
import bg from "../../assets/footer/contactbg.png";
import cardbg from "../../assets/footer/privacybg.png";

export default function TermsModal({
  setTermsModal,
}: {
  setTermsModal: (open: boolean) => void;
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
      className="px-20 z-[9999] bg-white/30 cursor-pointer backdrop-blur-sm w-full h-screen fixed inset-0 flex items-center justify-center"
      onClick={() => setTermsModal(false)}
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
        <div className="flex flex-row gap-4 items-center justify-center max-w-[584px]">
          <span className="font-cormo text-[64px]/[120%] italic">Terms</span>
          <span className="text-[64px]/[120%] italic font-thin">&</span>
          <span className="font-subito font-bold text-[64px]/[120%]">
            Conditions
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
              Welcome to MavCanvas. These Terms and Conditions ("Terms") govern
              your use of the MavCanvas website and the digital agency solutions
              we provide (collectively, the "Service").
            </p>

            <ol className="list-decimal list-inside space-y-6 mt-3 text-[29px]/[120%] font-light">
              <li>
                <strong>Acceptance of Terms</strong>
                <div className="ml-4 mt-1">
                  <p>
                    By accessing or using the Service, you confirm that you have
                    read, understood, and agree to be bound by these Terms and
                    our Privacy Policy. If you do not agree with all of these
                    Terms, you are expressly prohibited from using the Service.
                  </p>
                </div>
              </li>

              <li>
                <strong>Services and Payment</strong>
                <div className="ml-4 mt-1">
                  <p>
                    <strong>A. Services</strong> — MavCanvas provides various
                    digital marketing and technology solutions (e.g., website
                    design, SEO, content creation, consulting). The scope of
                    services will be defined in a separate Statement of Work
                    (SOW) or Service Agreement between you and MavCanvas.
                  </p>
                  <p className="mt-2">
                    <strong>B. Payment Terms</strong> — All service fees and
                    payment schedules will be outlined in the SOW. You agree to
                    pay all charges and fees incurred by you or any users of
                    your account at the prices in effect when such charges are
                    incurred.
                  </p>
                </div>
              </li>

              <li>
                <strong>User Obligations</strong>
                <div className="ml-4 mt-1">
                  <p>You agree that you will not:</p>
                  <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                    <li>
                      Use the Service for any illegal or unauthorized purpose.
                    </li>
                    <li>
                      Interfere with or disrupt the performance of the Service.
                    </li>
                    <li>
                      Attempt to bypass any measures of the Service designed to
                      restrict access.
                    </li>
                    <li>
                      Upload material that is libelous, defamatory, or violates
                      third‑party rights.
                    </li>
                  </ul>
                </div>
              </li>

              <li>
                <strong>Intellectual Property Rights</strong>
                <div className="ml-4 mt-1">
                  <p>
                    <strong>A. MavCanvas IP</strong> — All content, features,
                    and functionality on the MavCanvas website (text, graphics,
                    logos, code) are the property of MavCanvas and protected by
                    law. You may not use our intellectual property without
                    express written permission.
                  </p>
                  <p className="mt-2">
                    <strong>B. Client IP</strong> — Any intellectual property
                    you provide (e.g., logos, brand assets, existing code)
                    remains yours. New deliverables created by MavCanvas will be
                    transferred to your ownership upon full and final payment,
                    as detailed in the SOW.
                  </p>
                </div>
              </li>

              <li>
                <strong>Termination</strong>
                <div className="ml-4 mt-1">
                  <p>
                    We reserve the right to suspend or terminate your access to
                    the Service, without notice or liability, for any breach of
                    these Terms.
                  </p>
                </div>
              </li>

              <li>
                <strong>Disclaimers and Limitation of Liability</strong>
                <div className="ml-4 mt-1">
                  <p>
                    The Service is provided "as-is" and "as-available." We do
                    not guarantee uninterrupted, error-free, or fully secure
                    operation. To the maximum extent permitted by law, MavCanvas
                    will not be liable for indirect, incidental, special,
                    consequential, or punitive damages arising from your use of
                    the Service.
                  </p>
                </div>
              </li>

              <li>
                <strong>Governing Law</strong>
                <div className="ml-4 mt-1">
                  <p>
                    These Terms shall be governed by and construed in accordance
                    with the laws of [Specify Jurisdiction, e.g., the Federal
                    Republic of Nigeria], without regard to conflicts of law.
                  </p>
                </div>
              </li>

              <li>
                <strong>Contact Us</strong>
                <div className="ml-4 mt-1">
                  <p>
                    If you have any questions about these Terms, contact us at:
                  </p>
                  <p className="mt-2">
                    Email:{" "}
                    <a
                      className="underline"
                      href="mailto:support@mavcanvas.com"
                    >
                      support@mavcanvas.com
                    </a>
                  </p>
                  {/* <p>Address: [Your Agency Physical Address]</p> */}
                </div>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
