import { RemixiconComponentType, RiExternalLinkLine, RiUser5Line } from '@remixicon/react';
import Link from 'next/link';
import styles from './link-card.module.scss';

interface LinkCardProps {
  url: string;
  title: string;
  isExternal?: boolean;
  icon?: RemixiconComponentType;
}

export default function LinkCard({
  url,
  title,
  isExternal = false,
  icon: Icon = RiUser5Line,
}: LinkCardProps) {
  return (
    <Link
      href={url}
      className={styles['wrapper']}
      target={isExternal ? '_blank' : '_self'}
      rel={isExternal ? 'noopener noreferrer' : undefined}
    >
      <div className={styles['card']}>
        <div className={styles['card__icon']}>
          <Icon size={20} />
        </div>
        <div className={styles['card__body']}>
          <span className={styles['card__body__title']}>{title}</span>
          <span className={styles['card__body__url']}>{url}</span>
        </div>
      </div>
      <RiExternalLinkLine color="var(--text-secondary)" size={16} />
    </Link>
  );
}
