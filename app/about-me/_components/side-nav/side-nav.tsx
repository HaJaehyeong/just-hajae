import { SHARE_LINK, TREE_MENU } from '@/constants/constants';
import TreeMenu from '@/ui/tree-menu';
import styles from './side-nav.module.scss';
import LinkCard from '@/components/link-card/link-card';

export default function SideNav() {
  return (
    <div className={styles['side-nav']}>
      <div>
        {SHARE_LINK.map((link) => (
          <LinkCard key={link.key} url={link.url} title={link.title} icon={link.icon} isExternal />
        ))}
      </div>
      <div className={styles['side-nav__tree']}>
        <TreeMenu nodes={TREE_MENU} />
      </div>
    </div>
  );
}
