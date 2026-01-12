import { NAV_TABS } from '@/constants/constants';
import { render, screen } from '@testing-library/react';
import Header from './header';

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(),
}));

import { usePathname } from 'next/navigation';

describe('Header', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('NAV_TABS에 정의된 모든 탭을 렌더링한다', () => {
    (usePathname as jest.Mock).mockReturnValue('/');

    render(<Header />);

    NAV_TABS.forEach((tab) => {
      expect(screen.getByText(tab.name)).toBeInTheDocument();
    });
  });

  it('현재 pathname과 일치하는 탭에 active 클래스가 적용된다', () => {
    const activeTab = NAV_TABS[0];

    (usePathname as jest.Mock).mockReturnValue(activeTab.url);

    render(<Header />);

    const activeLink = screen.getByText(activeTab.name);

    expect(activeLink.className).toContain('tab--active');
  });
});
