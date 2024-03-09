const navLinks = [
  { name: 'Impact', slug: '/#whatishackdavis' },
  { name: 'Inclusion', slug: '/#everyone' },
  { name: 'FAQ', slug: '/#faq' },
  { name: 'Sponsors', slug: '/#sponsors' },
  { name: 'About', slug: '/about-us' },
  // { name: 'Medium', slug: 'https://medium.com/@HackDavis' },
  // { name: 'Facebook', slug: 'https://www.facebook.com/HackDavis' },
  // { name: 'Twitter', slug: 'https://twitter.com/hack_davis' },
  // { name: 'Instagram', slug: 'https://www.instagram.com/hackdavis' },
  // { name: 'LinkedIn', slug: 'https://www.linkedin.com/company/hackdavis' },
  // { name: 'Discord', slug: 'https://discord.gg/wc6QQEc' },
];

interface NavLink {
  name: string;
  slug: string;
}

export { navLinks, type NavLink };
