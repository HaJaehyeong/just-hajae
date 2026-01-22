import LinkCard from '@/components/link-card/link-card';
import ThreeColumnLayout from '@/components/three-column-layout/three-column-layout';
import { SHARE_LINK } from '@/constants/constants';

export default function Home() {
  return (
    <ThreeColumnLayout
      left={
        <>
          {SHARE_LINK.map((link) => (
            <LinkCard
              key={link.key}
              url={link.url}
              title={link.title}
              icon={link.icon}
              isExternal
            />
          ))}
        </>
      }
      center={<>hello</>}
      right={<>world</>}
    />
  );
}
