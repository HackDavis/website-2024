const navLinks = [
  {
    name: 'Home',
    slug: '/',
  },
  {
    name: 'About Us',
    slug: '/about',
  },
  {
    name: 'Examples',
    slug: '/examples',
  },
  {
    name: 'Contact Us',
    slug: '/contact',
  },
];

interface NavLink {
  name: string;
  slug: string;
}

export { navLinks, type NavLink };
