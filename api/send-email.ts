import { Resend } from "resend";
import type { VercelRequest, VercelResponse } from "@vercel/node";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, services, planName, planPrice, source, message } =
    req.body || {};

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  const resendApiKey =
    process.env.RESEND_API_KEY || process.env.VITE_RESEND_API_KEY;
  const resendFromEmail =
    process.env.RESEND_FROM_EMAIL || process.env.VITE_RESEND_FROM_EMAIL;

  if (!resendApiKey) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY" });
  }

  if (!resendFromEmail) {
    return res.status(500).json({ error: "Missing RESEND_FROM_EMAIL" });
  }

  const resend = new Resend(resendApiKey);

  try {
    const selectedServices = Array.isArray(services) ? services : [];
    const isCallRequest = source === "checkout-step-2";
    const emailTitle = isCallRequest ? "Call Request" : "Booking Request";
    const emailSubtitle = isCallRequest
      ? "A call request has been submitted from the website."
      : "A booking request has been submitted from the website.";
    const servicesText =
      selectedServices.length > 0
        ? selectedServices.map((item) => `- ${item}`).join("\n")
        : "No services selected";
    const messageText =
      typeof message === "string" && message.trim().length > 0
        ? message.trim()
        : "";

    const payloadPreview = JSON.stringify(req.body || {}, null, 2);
    const servicesHtml =
      selectedServices.length > 0
        ? `<ul style="padding-left: 18px; margin: 8px 0 0;">${selectedServices
            .map((item) => `<li style="margin: 4px 0;">${item}</li>`)
            .join("")}</ul>`
        : '<p style="margin: 8px 0 0;">No services selected</p>';
    const callRequestServicesRow = isCallRequest
      ? `
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">Selected services</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${servicesHtml}</td>
              </tr>
      `
      : "";
    const bookingRequestServicesBlock = !isCallRequest
      ? `
            <div style="margin-top: 16px;">
              <p style="margin: 0; font-weight: 600;">Selected services</p>
              ${servicesHtml}
            </div>
      `
      : "";
    const messageRow = messageText
      ? `
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">Additional details</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb; white-space: pre-wrap;">${messageText}</td>
              </tr>
      `
      : "";

    const html = `
      <div style="font-family: Arial, sans-serif; background: #f5f7fa; padding: 24px; color: #111827;">
        <div style="max-width: 640px; margin: 0 auto; background: #ffffff; border-radius: 12px; overflow: hidden; border: 1px solid #e5e7eb;">
          <div style="background: linear-gradient(90deg, #02ddef, #fa01f0); padding: 20px 24px; color: #0b0b0b; font-weight: 700; font-size: 20px;">
            MavsCanvas ${emailTitle}
          </div>
          <div style="padding: 24px;">
            <p style="margin: 0 0 16px; font-size: 15px; line-height: 1.6; color: #374151;">
              ${emailSubtitle}
            </p>
            <table style="width: 100%; border-collapse: collapse; margin: 16px 0; font-size: 14px;">
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; width: 35%; font-weight: 600; background: #f9fafb;">Email</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">Source</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${"MavsCanvas Website"}</td>
              </tr>
              ${messageRow}
              ${callRequestServicesRow}
              ${
                !isCallRequest
                  ? `
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">Plan</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${planName || "N/A"}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #e5e7eb; font-weight: 600; background: #f9fafb;">Price</td>
                <td style="padding: 10px; border: 1px solid #e5e7eb;">${planPrice || "N/A"}</td>
              </tr>
              `
                  : ""
              }
            </table>
            ${bookingRequestServicesBlock}
          </div>
        </div>
      </div>
    `;

    const { data, error } = await resend.emails.send({
      from: resendFromEmail,
      to: ["mavscanvas@gmail.com"],
      replyTo: email,
      subject: `MavsCanvas - New booking request from ${email}`,
      html,
      text: isCallRequest
        ? `Thanks for reaching out to MavsCanvas.\n\nEmail: ${email}\nSource: ${source || "N/A"}${messageText ? `\nAdditional details: ${messageText}` : ""}\n\nSelected services:\n${servicesText}\n\nFull request payload:\n${payloadPreview}\n\nWe will contact you shortly.`
        : `Thanks for reaching out to MavsCanvas.\n\nEmail: ${email}\nSource: ${source || "N/A"}\nPlan: ${planName || "N/A"}\nPrice: ${planPrice || "N/A"}${messageText ? `\nAdditional details: ${messageText}` : ""}\n\nSelected services:\n${servicesText}\n\nFull request payload:\n${payloadPreview}\n\nWe will contact you shortly.`,
    });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true, id: data?.id });
  } catch (error) {
    return res.status(500).json({
      error: error instanceof Error ? error.message : "Failed to send email",
    });
  }
}
