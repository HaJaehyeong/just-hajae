import { ReactNode } from 'react';
import styles from './one-column-layout.module.scss';

interface OneColumnLayoutProps {
  children: ReactNode;
}

export default function OneColumnLayout({ children }: OneColumnLayoutProps) {
  return (
    <div className={styles['layout']}>
      <div className={styles['one-column']}>
        <div className={styles['center']}>{children}</div>
      </div>
    </div>
  );
}
