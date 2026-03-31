import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';
import Script from 'next/script'; // 1. Bunu ekle
import {Metadata} from 'next';
import { GoogleAnalytics } from '@next/third-parties/google'; // Import et

const inter = Inter({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | Bulut Altundiş',
    default: 'Bulut Altundiş | Blog',
  },
  description: 'Yazılım geliştirme, Next.js ve teknoloji üzerine blog yazılarım.',
  metadataBase: new URL('https://blog.bulutaltundis.cloud'), // Kendi domainini yaz
};

export default function Layout({ children }: { children: React.ReactNode }) {

  const gaId = process.env.NEXT_PUBLIC_GA_ID
  
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
        {/* 2. Microsoft Clarity Script buraya */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "${process.env.NEXT_PUBLIC_CLARITY_ID}");
          `}
        </Script>
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>

       {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}

