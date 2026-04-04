// @ts-ignore
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, score, result, recommendations } = body;

    // ===== VALIDATION =====
    if (!email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // ===== CREATE TRANSPORTER =====
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ===== EMAIL TEMPLATE =====
    const mailOptions = {
      from: `"ZunairAI Security" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Your Digital Peace Assessment Report",

      html: `
        <div style="font-family: Arial, sans-serif; padding:20px; background:#0f172a; color:#e2e8f0;">
          
          <h2 style="color:#3b82f6;">Digital Peace Report</h2>

          <p><strong>Score:</strong> ${score}%</p>
          <p><strong>Status:</strong> ${result}</p>

          <h3 style="margin-top:20px;">Recommended Actions:</h3>
          <ul>
            ${
              recommendations?.map((rec: string) => `<li>${rec}</li>`).join("") || ""
            }
          </ul>

          <br/>

          <p style="margin-top:20px;">
            Thank you for using <strong>ZunairAI</strong> 🚀
          </p>

        </div>
      `,
    };

    // ===== SEND EMAIL =====
    await transporter.sendMail(mailOptions);

    return Response.json({ success: true });

  } catch (error) {
    console.error("Email error:", error);

    return Response.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}