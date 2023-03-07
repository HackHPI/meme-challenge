import { FiFeather, FiImage } from 'react-icons/fi';
import type { IconType } from 'react-icons/lib';

interface NavItem {
  label: string;
  icon: IconType;
  path: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Memes',
    icon: FiImage,
    path: '/memes',
  },
  {
    label: 'My Memes',
    icon: FiFeather,
    path: '/my-memes',
  },
];
