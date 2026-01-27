import ThreeColumnLayout from '@/components/three-column-layout/three-column-layout';
import type { Metadata } from 'next';
import SideNav from '@/app/about-me/_components/side-nav/side-nav';

export const metadata: Metadata = {
  title: 'Just Hajae | About Me',
  description: '',
};

interface AboutMeLayoutProps {
  children: React.ReactNode;
}

export default function AboutMeLayout({ children }: Readonly<AboutMeLayoutProps>) {
  return <ThreeColumnLayout left={<SideNav />} center={<>{children}</>} right={<>world</>} />;
}
