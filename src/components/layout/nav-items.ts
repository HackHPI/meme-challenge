import { BsFire } from 'react-icons/bs';
import { FiClock, FiImage } from 'react-icons/fi';
import type { IconType } from 'react-icons/lib';

interface NavItem {
  label: string;
  icon: IconType;
  path: string;
}

export const navItems: NavItem[] = [
  {
    label: 'Newest Memes',
    icon: FiClock,
    path: '/memes/newest',
  },
  {
    label: 'Trending Memes',
    icon: BsFire,
    path: '/memes/trending',
  },
  {
    label: 'My Memes',
    icon: FiImage,
    path: '/memes/my',
  },
];
