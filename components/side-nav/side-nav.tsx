import { TREE_MENU } from '@/constants/constants';
import TreeMenu from '@/ui/tree-menu';
import styles from './side-nav.module.scss';

export default function SideNav() {
  return (
    <div className={styles['wrapper']}>
      <TreeMenu nodes={TREE_MENU} />
    </div>
  );
}
