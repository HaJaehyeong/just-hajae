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
];
