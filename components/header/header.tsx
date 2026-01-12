'use client';
import { NAV_TABS } from '@/constants/constants';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './header.module.scss';

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={styles['header']}>
      <nav className={styles['header__nav']}>
        <div className={styles['header__nav__title']}>JUST HAJAE</div>
        <div className={styles['header__nav__tabs']}>
          {NAV_TABS.map((tab) => (
            <Link
              key={tab.id}
              href={tab.url}
              className={`${styles['tab']} ${pathname === tab.url ? styles['tab--active'] : ''}`}
            >
              {tab.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
