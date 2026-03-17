import { NextResponse } from 'next/server';

// GET: Verileri listeler
export async function GET() {
  return NextResponse.json([
    { id: 1, title: "Backend Nedir?", status: "Tamamlandı" },
    { id: 2, title: "HTTP Metodları", status: "Devam Ediyor" }
  ]);
}

// POST: Yeni veri "oluşturur"
export async function POST(request: Request) {
  const body = await request.json();
  return NextResponse.json({
    message: "Veri başarıyla oluşturuldu!",
    receivedData: body,
    status: 201
  }, { status: 201 });
}