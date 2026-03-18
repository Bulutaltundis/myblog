import { NextRequest, NextResponse } from 'next/server';

// 1. Tip tanımını yapıyoruz: params artık bir Promise.
type RouteContext = {
  params: Promise<{ id: string }>;
};

// GET: Tekil veriyi oku
export async function GET(
  request: NextRequest,
  { params }: RouteContext
) {
  const { id } = await params; // await kullanımı ZORUNLUDUR
  
  return NextResponse.json({
    id: parseInt(id),
    title: "Örnek Veri",
    status: "Okundu"
  });
}

// PUT: Veriyi güncelle
export async function PUT(
  request: NextRequest,
  { params }: RouteContext
) {
  const { id } = await params;
  const body = await request.json();

  return NextResponse.json({
    message: `ID'si ${id} olan kayıt güncellendi.`,
    receivedData: body,
    updatedAt: new Date().toISOString()
  });
}

// DELETE: Veriyi sil
export async function DELETE(
  request: NextRequest,
  { params }: RouteContext
) {
  const { id } = await params;

  return NextResponse.json({
    message: `ID'si ${id} olan kayıt (${id}) başarıyla silindi.`,
    success: true
  });
} // <--- Buradaki virgülü sildik, süslü parantezi kapattık.