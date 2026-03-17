import { generateFiles } from 'fumadocs-openapi';
import { createOpenAPI } from 'fumadocs-openapi/server';

// Kendi JSON içeriğini buraya bağla
const openapi = createOpenAPI({
  input: ['./unkey.json', './backend_nedir-openapi.json'], 
});

async function main() {
  await generateFiles({
    input: openapi,
    output: './content/docs/',
  });
  console.log('✅ Sayfalar oluşturuldu!');
}

main().catch(console.error);