import { EmailTemplate } from '@/components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = process.env.CONTACT_EMAIL ?? 'geral@seatrail.gdmao.com';
const sender = process.env.RESEND_FROM_EMAIL ?? 'Seatrail <onboarding@resend.dev>';

type ContactPayload = {
  name?: unknown;
  company?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
};

function getText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;
    const name = getText(body.name);
    const company = getText(body.company);
    const email = getText(body.email);
    const service = getText(body.service);
    const message = getText(body.message);

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Nome, email e mensagem são obrigatórios.' },
        { status: 400 },
      );
    }

    const { data, error } = await resend.emails.send({
      from: sender,
      to: [recipient],
      replyTo: email,
      subject: `Novo contacto de ${name}`,
      react: EmailTemplate({
        firstName: name,
        companyName: company,
        personalEmail: email,
        service,
        message,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}