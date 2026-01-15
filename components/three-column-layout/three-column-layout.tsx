import { ReactNode } from 'react';
import styles from './three-column-layout.module.scss';

interface ThreeColumnLayoutProps {
  left: ReactNode;
  center: ReactNode;
  right: ReactNode;
}

export default function ThreeColumnLayout({ left, center, right }: ThreeColumnLayoutProps) {
  return (
    <div className={styles['layout']}>
      <div className={styles['three-column']}>
        <div className={styles['left']}>{left}</div>
        <div className={styles['center']}>{center}</div>
        <div className={styles['right']}>{right}</div>
      </div>
    </div>
  );
}
