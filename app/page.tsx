import LinkCard from '@/components/link-card/link-card';
import ThreeColumnLayout from '@/components/three-column-layout/three-column-layout';
import { RiGithubLine } from '@remixicon/react';

export default function Home() {
  return (
    <ThreeColumnLayout
      left={
        <>
          <LinkCard url="https://www.naver.com" title="Naver" />
          <LinkCard
            url="https://github.com/HaJaehyeong/"
            title="To Github"
            icon={RiGithubLine}
            isExternal
          />
        </>
      }
      center={<>hello</>}
      right={<>world</>}
    />
  );
}
