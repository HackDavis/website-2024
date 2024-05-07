interface NavLink {
  name: string;
  slug: string;
}
const navLinks: NavLink[] = [
  // { name: 'Impact', slug: '/#whatishackdavis' },
  // { name: 'Prizes', slug: '/#prizes' },
  // { name: 'Inclusion', slug: '/#everyone' },
  { name: 'Teams', slug: '/#teams' },
  { name: 'FAQ', slug: '/#faq' },
  // { name: 'Sponsors', slug: '/#sponsors' },
  { name: 'About', slug: '/about-us' },
];

const navLinksDOE: NavLink[] = [
  { name: 'Resources', slug: '/event/#resources' },
  { name: 'Prizes', slug: '/event/#prizes' },
  { name: 'Sponsors', slug: '/event/#sponsors' },
  { name: 'Schedule', slug: '/event/schedule' },
];

export { navLinks, navLinksDOE, type NavLink };
