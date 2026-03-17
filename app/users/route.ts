import { NextResponse } from 'next/server';

export async function GET() {
  const users = [
    {
      id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
      name: "Bulut Altundis",
      email: "bulut@example.com"
    }
  ];

  return NextResponse.json(users);
}