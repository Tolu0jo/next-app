
import WelcomeTemplate from '@/emails/WelcomeTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST =async()=>{
   
   await resend.emails.send({
        from: '...',
        to: 'arex9172@gmail.com',
        subject: 'welcome',
        
        react: <WelcomeTemplate name={"hello"}/>
      });
  return NextResponse.json("suceesfully sent")
}