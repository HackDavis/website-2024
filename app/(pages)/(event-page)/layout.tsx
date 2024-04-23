import '@globals/globals.scss';
import fonts from '@globals/fonts';
import metadata from '@globals/metadata.json';

import { navLinksDOE } from '@data/navLinks';
import Navbar from '@components/Navbar/Navbar';
import Footer from '@components/Footer/Footer';

export { metadata };

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts}>
        <Navbar navLinks={navLinksDOE} />
        {children}
        <Footer />
      </body>
    </html>
  );
}
