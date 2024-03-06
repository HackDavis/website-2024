import '@globals/globals.scss';
import fonts from '@globals/fonts';
import metadata from '@globals/metadata.json';

import { navLinks } from '@data/navLinks';
import Navbar from '@components/Navbar/Navbar';
import Footer from './_components/Footer/Footer';
import { LoadingProvider } from './_contexts/LoadingContext';
import Loader from './_components/Loader/Loader';

export { metadata };

export default function RootLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={fonts}>
        <LoadingProvider>
          <Loader />
          <Navbar navLinks={navLinks} />
          {children}
          <Footer />
        </LoadingProvider>
      </body>
    </html>
  );
}
