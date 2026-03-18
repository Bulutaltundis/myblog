import { NextRequest, NextResponse } from 'next/server';

// PUT: Veriyi günceller
export async function PUT(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // params artık bir Promise
) {
  const resolvedParams = await params; // await ederek içindeki verilere ulaşıyoruz
  const id = resolvedParams.id;

  return NextResponse.json({
    message: `ID'si ${id} olan kayıt güncellendi.`,
    updatedAt: new Date().toISOString()
  });
}

// DELETE: Veriyi siler
export async function DELETE(
  request: NextRequest, 
  { params }: { params: Promise<{ id: string }> } // Burada da aynı değişiklik
) {
  const resolvedParams = await params;
  const id = resolvedParams.id;

  return NextResponse.json({
    message: `ID'si ${id} olan kayıt başarıyla silindi.`,
    success: true
  });
}