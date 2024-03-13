export interface navMenuItem {
  title: string;
  link?: string;
  className?: string;
}

export let navMenuItems: navMenuItem[] = [
  { title: 'Downloads', link: 'downloads', className: '' },
  { title: 'Pricing', link: 'pricing', className: '' },
  { title: 'Features', link: 'features', className: '' },
  { title: 'About Us', link: 'about-us', className: '' },
  { title: 'Contact', link: 'contact-us', className: '' },
];
