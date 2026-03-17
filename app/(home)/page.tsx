import Link from 'next/link';
import { source } from '@/lib/source';
import { ArrowRight, Github, Code2, Cpu, Laptop, Terminal } from 'lucide-react';

export default function HomePage() {
  // Tarih hatasını engellemek için sadece son 3 sayfayı alıyoruz
  const latestPosts = source
    .getPages()
    .slice(0, 3);

  return (
    <div className="flex flex-col items-center bg-fd-background min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-[1100px] pt-32 pb-20 text-center px-4">
        <div className="mb-8 inline-flex items-center rounded-full border bg-fd-muted px-4 py-1.5 text-sm font-medium">
          <span className="mr-2 flex h-2 w-2 rounded-full bg-fd-primary animate-pulse" />
          Next.js ile yapılmıştır.
        </div>
        
        <h1 className="mb-8 text-6xl font-extrabold tracking-tight sm:text-8xl bg-gradient-to-b from-fd-foreground to-fd-foreground/60 bg-clip-text text-transparent">
          Bloguma Hoş Geldiniz
        </h1>
        
        <p className="mx-auto mb-12 max-w-[750px] text-xl text-fd-muted-foreground leading-relaxed">
          Merhaba ben Bulut. Bu websitesinde yazdığım blog yazılarımı paylaşıyorum.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/docs"
            className="flex items-center justify-center gap-2 rounded-xl bg-fd-primary px-8 py-4 font-bold text-fd-primary-foreground transition-all hover:scale-105 hover:shadow-xl active:scale-95"
          >
            Blogu Keşfet <ArrowRight size={20} />
          </Link>
          <Link
            href="https://github.com/bulutaltundis"
            className="flex items-center justify-center gap-2 rounded-xl border bg-fd-background px-8 py-4 font-bold transition-all hover:bg-fd-accent hover:border-fd-primary/50"
          >
            <Github size={20} /> GitHub
          </Link>
        </div>
      </section>

      {/* Yetenekler / Odak Alanları */}
      

      {/* Son Blog Yazıları */}
      <section className="container max-w-[900px] py-20 px-4 w-full">
        <div className="mb-12 flex items-end justify-between border-b pb-6">
          <div>
            <h2 className="text-4xl font-black tracking-tight uppercase text-fd-foreground">Son Yazılar</h2>
            <p className="mt-2 text-fd-muted-foreground text-lg">Blog yazılarım.</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {latestPosts.map((post) => (
            <Link
              key={post.url}
              href={post.url}
              className="group block rounded-2xl border border-transparent bg-fd-card p-6 transition-all hover:border-fd-border hover:shadow-md active:scale-[0.99]"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm font-medium text-fd-muted-foreground">
                  <span className="px-2 py-0.5 rounded-md bg-fd-muted uppercase tracking-wider text-[10px]">Blog Post</span>
                </div>
                <h3 className="text-2xl font-bold group-hover:text-fd-primary transition-colors leading-tight text-fd-foreground">
                  {post.data.title}
                </h3>
                {post.data.description && (
                  <p className="text-fd-muted-foreground line-clamp-2 text-lg italic">
                    "{post.data.description}"
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-auto py-12 text-center text-sm text-fd-muted-foreground border-t w-full">
        <p>© 2026 Bulut Altundiş. Next.js ile yapıldı.</p>
      </footer>
    </div>
  );
}