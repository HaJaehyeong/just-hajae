import { RemixiconComponentType } from '@remixicon/react';

export type NavTab = {
  id: string;
  url: string;
  name: string;
  isExternal?: boolean;
};

export type ShareLink = {
  key: string;
  url: string;
  title: string;
  icon?: RemixiconComponentType;
};

export type TreeNode = {
  id: string;
  label: string;
  url?: string;
  children?: TreeNode[];
  isBold?: boolean;
};
