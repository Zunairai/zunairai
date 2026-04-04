import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, score, result, recommendations } = body;

    // Validate input
    if (!email) {
      return Response.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Digital Peace Assessment Report",
      html: `
        <h2>Digital Peace Report</h2>
        <p><strong>Score:</strong> ${score}%</p>
        <p><strong>Status:</strong> ${result}</p>

        <h3>Recommended Actions:</h3>
        <ul>
          ${recommendations.map((rec: string) => `<li>${rec}</li>`).join("")}
        </ul>

        <br/>
        <p>Thank you for using ZunairAI 🚀</p>
      `,
    };

    // Send email
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