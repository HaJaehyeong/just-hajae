import styles from './side-nav.module.scss';

export default function SideNav() {
  return (
    <div className={styles['wrapper']}>
      <div>TITLE</div>
      <div>Nav Link</div>
      <div>
        <div>Tree Parents</div>
        <div>Tree Childrends</div>
      </div>
    </div>
  );
}
