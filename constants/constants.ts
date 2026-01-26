import { NavTab, ShareLink, TreeNode } from '@/types/types';
import { RiGithubLine } from '@remixicon/react';

export const NAV_TABS: NavTab[] = [
  {
    id: 'home',
    url: '/',
    name: 'HOME',
  },
  {
    id: 'aboutme',
    url: '/about-me',
    name: 'About-Me',
  },
  {
    id: 'contactme',
    url: '/contact-me',
    name: 'Contact-Me',
  },
  {
    id: 'tonotionresume',
    url: 'https://sleepy-manicure-27d.notion.site/Hajae-2e2d3ec7ea10800c9894fa002e9f85d4?pvs=74',
    name: 'To-Resume',
    isExternal: true,
  },
  {
    id: 'togithub',
    url: 'https://github.com/HaJaehyeong/',
    name: 'To-Github',
    isExternal: true,
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
    id: 'tree-node-introduce',
    label: 'Introduce',
    url: '/about-me/introduce',
    isBold: true,
  },
  {
    id: 'tree-node-profile',
    label: 'Profile',
    url: '/about-me/profile',
  },
  {
    id: 'tree-node-parents-yeonhap',
    label: 'YeonHap System',
    isBold: true,
    children: [
      {
        id: 'tree-node-childrent-barofactorypro',
        label: 'Baro Factory Pro',
        url: '/about-me/work-experience/baro-factory-pro',
      },
      {
        id: 'tree-node-childrent-rnd',
        label: 'R&D Smart Machine',
        url: '/about-me/work-experience/smart-machine',
      },
      {
        id: 'tree-node-childrent-barofactory',
        label: 'Baro Factory',
        url: '/about-me/work-experience/baro-factory',
      },
    ],
  },
  {
    id: 'tree-node-parents-bizreach',
    label: 'Bizreach',
    isBold: true,
    children: [
      {
        id: 'tree-node-childrent-angular',
        label: 'AngularJS to Angular',
        url: '/about-me/work-experience/angularjs-to-angular',
      },
      {
        id: 'tree-node-childrent-selectionflow',
        label: 'Selection Flow',
        url: '/about-me/work-experience/selection-flow',
      },
    ],
  },
  {
    id: 'tree-node-parents-experience',
    label: 'Experience',
    children: [
      {
        id: 'tree-node-childrent-sideproject-1',
        label: 'WriteOn',
        url: '/about-me/experience/writeon',
      },
      {
        id: 'tree-node-childrent-kituna',
        label: 'Capstone Project',
        url: '/about-me/experience/capstone-project',
      },
      {
        id: 'tree-node-childrent-ppomi',
        label: 'PPomi (Iot)',
        url: '/about-me/experience/PPomi',
      },
    ],
  },
  {
    id: 'tree-node-scrum',
    label: 'Scrum',
    url: '/about-me/scrum',
  },
  {
    id: 'tree-node-skill',
    label: 'Skill',
    url: '/about-me/skill',
  },
];
