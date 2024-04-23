interface NavLink {
  name: string;
  slug: string;
}
const navLinks: NavLink[] = [
  { name: 'Impact', slug: '/#whatishackdavis' },
  // { name: 'Resources', slug: '/#resources' },
  { name: 'Prizes', slug: '/#prizes' },
  { name: 'Inclusion', slug: '/#everyone' },
  { name: 'FAQ', slug: '/#faq' },
  { name: 'Sponsors', slug: '/#sponsors' },
  { name: 'About', slug: '/about-us' },
];

const navLinksDOE: NavLink[] = [
  { name: 'Resources', slug: '/event/#resources' },
  { name: 'Schedule', slug: '/event/schedule' },
  { name: 'Prizes', slug: '/event/#prizes' },
  { name: 'Sponsors', slug: '/event/#sponsors' },
];

export { navLinks, navLinksDOE, type NavLink };
