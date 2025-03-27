import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    if (!name || !email || !message ) {
        return NextResponse.json({ error: "Please enter all required fieids."}, {status: 400 });
    }

    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS ? "******" : "undefined");


    try {
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 465,
            secure: true, //  SSL/TLSを使用
            auth: {
                user: process.env.EMAIL_USER, //環境変数で設定
                pass: process.env.EMAIL_PASS,
            },
        });
        

        await transporter.sendMail({
            from: ` "${name}" <${process.env.EMAIL_USER}>`,
            to: "hakokuro8@gmail.com", //受信先
            subject: "ポートフォリオからの問い合わせ",
            text: `名前: ${name}\nメール: ${email}\nメッセージ: ${message}`,
        });

        return NextResponse.json({ success: "Email Sent successfully"});
    }
    catch(error) {
        console.error("Failed sending email:", error);
        return NextResponse.json({ error: `Failed sending email`}, { status: 500 });
    }
}


