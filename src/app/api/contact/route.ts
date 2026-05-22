import {NextResponse} from 'next/server';
import {contactSchema} from '@/lib/schemas/contact';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {error: 'Validation failed', details: result.error.flatten()},
        {status: 400},
      );
    }

    // Honeypot tripped → pretend success so the bot moves on,
    // but never process the submission.
    if (result.data.website) {
      return NextResponse.json({success: true});
    }

    // TODO: Integrar servicio de email (Resend, SendGrid, etc.)
    // Por ahora solo valida y retorna success.
    // Ejemplo con Resend:
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: 'portfolio@tudominio.com',
    //   to: 'josue@tudominio.com',
    //   subject: `Contacto: ${result.data.name}`,
    //   text: `De: ${result.data.name} (${result.data.email})\n\n${result.data.message}`,
    // });

    console.log('Contact form submission:', result.data);

    return NextResponse.json({success: true});
  } catch {
    return NextResponse.json(
      {error: 'Internal server error'},
      {status: 500},
    );
  }
}
