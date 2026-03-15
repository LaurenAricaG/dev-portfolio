import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const EMAIL_TO = process.env.RESEND_EMAIL_TO as string;
const EMAIL_FROM = process.env.RESEND_EMAIL_FROM as string;

export async function POST(req: Request) {
  const { name, email, subject, message } = await req.json();

  if (!name || !email || !subject || !message) {
    return Response.json(
      { error: "Todos los campos son requeridos." },
      { status: 400 },
    );
  }

  const { data, error } = await resend.emails.send({
    from: `${name} <${EMAIL_FROM}>`,
    to: [EMAIL_TO],
    replyTo: email,
    subject: `[Portafolio] Nuevo mensaje de ${name}`,
    html: `
      <h2>Nuevo mensaje desde tu portafolio</h2>
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Asunto:</strong> ${subject}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${message}</p>
    `,
  });

  if (error) {
    return Response.json({ error }, { status: 500 });
  }

  return Response.json(data);
}
