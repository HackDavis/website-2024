import '@globals/globals.scss';
import fonts from '@globals/fonts';
import metadata from '@globals/metadata';

import navLinks from '@data/navLinks.json';
import Navbar from '@components/Navbar/Navbar';
import Footer from './_components/Footer/Footer';

export { metadata };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Navbar navLinks={navLinks} />
        {children}
        <Footer navLinks={navLinks} />
      </body>
    </html>
  );
}
