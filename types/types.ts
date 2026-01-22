import { RemixiconComponentType } from '@remixicon/react';

export type NavTab = {
  id: string;
  url: string;
  name: string;
};

export type ShareLink = {
  key: string;
  url: string;
  title: string;
  icon?: RemixiconComponentType;
};
