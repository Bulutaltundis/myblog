import { NextResponse } from 'next/server';

// PUT: Veriyi günceller
export async function PUT(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  return NextResponse.json({
    message: `ID'si ${id} olan kayıt güncellendi.`,
    updatedAt: new Date().toISOString()
  });
}

// DELETE: Veriyi siler
export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = params.id;
  return NextResponse.json({
    message: `ID'si ${id} olan kayıt başarıyla silindi.`,
    success: true
  });
}