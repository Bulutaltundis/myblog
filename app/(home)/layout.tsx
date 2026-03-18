import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: {
    template: '%s | Bulut Altundiş',
    default: 'Bulut Altundiş | Blog',
  },
  description: 'Yazılım geliştirme, Next.js ve teknoloji üzerine blog yazılarım.',
  metadataBase: new URL('https://blog.bulutaltundis.cloud'), // Kendi domainini yaz
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return <HomeLayout {...baseOptions()}>{children}</HomeLayout>;
}
