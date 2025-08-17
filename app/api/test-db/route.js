import { NextResponse } from 'next/server';
import connectdb from "@/lib/mongodb"
import Contact from '@/Models/Contact';

export async function GET() {
    try {
        await connectdb();
        const testContact = await Contact.create({
            name: 'Test User',
            email: 'test@example.com',
            subject: 'Test Subject',
            message: 'This is a test message',
        });
        return NextResponse.json({ message: 'Successfully connected and created test document', data: testContact }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ message: 'Failed to connect or create document', error: error.message }, { status: 500 });
    }
}