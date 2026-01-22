import { NavTab, ShareLink } from '@/types/types';
import { RiGithubLine } from '@remixicon/react';

export const NAV_TABS: NavTab[] = [
  {
    id: 'home',
    url: '/',
    name: 'HOME',
  },
  {
    id: 'profile',
    url: '/profile',
    name: 'Profile',
  },
  {
    id: 'resume',
    url: '/resume',
    name: 'Resume',
  },
  {
    id: 'work',
    url: '/work-experience',
    name: 'Work-Experience',
  },
  {
    id: 'hobby',
    url: '/hobby',
    name: 'Hobby',
  },
  {
    id: 'contactme',
    url: '/contact-me',
    name: 'Contact-Me',
  },
];

export const SHARE_LINK: ShareLink[] = [
  {
    key: 'resume-link',
    url: 'https://sleepy-manicure-27d.notion.site/Hajae-2e2d3ec7ea10800c9894fa002e9f85d4?pvs=74',
    title: 'To Resume',
  },
  {
    key: 'github-link',
    url: 'https://github.com/HaJaehyeong/',
    title: 'To Github',
    icon: RiGithubLine,
  },
];
