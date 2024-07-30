import { Resend } from 'resend';
import WelcomeTemplate from '../../../emails/WelcomeTemplate';
import { NextResponse } from "next/server";
import React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
    await resend.emails.send({
        from: '....',
        to: 'joseph.rivera@gmail.com',
        subject: '...',
        react: <WelcomeTemplate name='Joseph' />
    });

    return NextResponse.json({})
}