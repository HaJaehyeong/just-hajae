import OneColumnLayout from '@/components/one-column-layout/one-column-layout';
import styles from './page.module.scss';

export default function Home() {
  return (
    <OneColumnLayout>
      <main className={styles['main']}>
        <div className={styles['banner']}>
          <div className={styles['banner__title']}>My Frontend Developer Portfolio</div>
          <div className={styles['banner__sub-title']}>
            <div>
              2019년 <strong style={{ color: 'black' }}>일본에서 커리어를 시작</strong>하여, 현재는
              스마트 팩토리 도메인의 서비스를 개발하고 있습니다.
            </div>
            <div>
              초기에는 <strong style={{ color: 'black' }}>풀스택 개발자</strong>로 업무를
              시작했으나,
              <strong style={{ color: 'black' }}>사용자 경험과 화면을 통해 가치를 전달</strong>하는
              일에 매력을 느껴 <strong style={{ color: 'black' }}>프론트엔드 개발자</strong>를
              지향하게 되었습니다.
            </div>
          </div>
        </div>
        <div className={styles['banner__buttons']}>
          <button>About Me</button>
        </div>
      </main>
    </OneColumnLayout>
  );
}
