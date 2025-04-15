// app/api/signup/route.js

import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const userData = await req.json();

    const response = await fetch('https://platform.corptracking.com/api/signup/procform', {
      method: 'POST',
      headers: {
        'x-trackbox-username': 'InvesSarah',
        'x-trackbox-password': 'InvesSarah1107',
        'x-api-key': '2643889w34df345676ssdas323tgc738',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      return NextResponse.json({ message: 'Signup failed. Please try again.' }, { status: 400 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: 'Error occurred. Please try again.' }, { status: 500 });
  }
}
