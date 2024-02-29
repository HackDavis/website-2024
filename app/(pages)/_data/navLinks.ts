const navLinks = [
  { name: 'Impact', slug: '/impact' },
  { name: 'FAQ', slug: '/faq' },
  { name: 'Sponsors', slug: '/sponsors' },
  { name: 'About', slug: '/about-us' },
];

interface NavLink {
  name: string;
  slug: string;
}

export { navLinks, type NavLink };
