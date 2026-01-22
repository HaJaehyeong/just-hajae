import LinkCard from '@/components/link-card/link-card';
import SideNav from '@/components/side-nav/side-nav';
import ThreeColumnLayout from '@/components/three-column-layout/three-column-layout';
import { SHARE_LINK } from '@/constants/constants';
import styles from './page.module.scss';

export default function Home() {
  return (
    <ThreeColumnLayout
      left={
        <div className={styles['left']}>
          <div>
            {SHARE_LINK.map((link) => (
              <LinkCard
                key={link.key}
                url={link.url}
                title={link.title}
                icon={link.icon}
                isExternal
              />
            ))}
          </div>
          <SideNav />
        </div>
      }
      center={<>hello</>}
      right={<>world</>}
    />
  );
}
