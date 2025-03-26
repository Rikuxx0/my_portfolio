import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message ) {
        return NextResponse.json({ error: "Please enter all items "}, {status: 400 });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER, //環境変数で設定
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL_USER,
            to: "hakokuro8@gmail.com", //受信先
            subject: "ポートフォリオからの問い合わせ",
            text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`,
        });

        return NextResponse.json({ success: "Send email"});
    }
    catch(error) {
        return NextResponse.json({ error: "Failed sending email"}, { status: 500 });
    }
}
