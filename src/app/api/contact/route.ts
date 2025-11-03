import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
    try {
        const { name, email, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS, // mot de passe d’application Gmail
            },
        });

        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
            to: process.env.EMAIL_TO,
            subject: `Nouveau message de ${name}`,
            text: `Nom: ${name}\nEmail: ${email}\nMessage: ${message}`,
        });

        return NextResponse.json({ success: true });
    } catch (error: unknown) {
    let errorMessage = "Une erreur est survenue";

    if (error instanceof Error) {
        errorMessage = error.message;
    }

    console.error(errorMessage);

    return NextResponse.json(
        { success: false, error: errorMessage },
        { status: 500 }
    );
}
}
