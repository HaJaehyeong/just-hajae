import { NavTab, ShareLink, TreeNode } from '@/types/types';
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

export const TREE_MENU: TreeNode[] = [
  {
    id: 'tree-node-1',
    label: 'Hello World!!!!',
    isBold: true,
  },
  {
    id: 'tree-node-2',
    label: 'He ll oW or ld !!!!!',
  },
  {
    id: 'tree-node-parents-1',
    label: 'Hello Parents!',
    children: [
      {
        id: 'tree-node-childrent-1',
        label: 'Hello Children!',
      },
      {
        id: 'tree-node-childrent-2',
        label: 'Hello Children!!',
      },
    ],
  },
  {
    id: 'tree-node-parents-2',
    label: 'Hello Parents2!!',
    children: [
      {
        id: 'tree-node-childrent-3',
        label: 'Hello Children!!!',
      },
      {
        id: 'tree-node-childrent-4',
        label: 'Hello Children!!!!',
      },
    ],
    isBold: true,
  },
  // NOTE(hajae): for TEST
  {
    id: 'scroll-test-1',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-2',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-3',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-4',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-5',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-6',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-7',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-8',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-9',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-10',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-11',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-12',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-13',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-14',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-15',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-16',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-17',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-18',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-19',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-20',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-21',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-22',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-23',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-24',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-25',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-26',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-27',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-28',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-29',
    label: 'Scroll Test',
  },
  {
    id: 'scroll-test-30',
    label: 'Scroll Test',
  },
];
