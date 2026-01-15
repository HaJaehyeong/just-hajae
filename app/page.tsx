import ThreeColumnLayout from '@/components/three-column-layout/three-column-layout';

export default function Home() {
  return (
    <ThreeColumnLayout
      left={<>왼쪽입니다</>}
      center={<>가운데입니다</>}
      right={<>오른쪽입니다</>}
    />
  );
}
