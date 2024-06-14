'use client';
// import Everyone from './_components/Everyone/Everyone';
import Landing from './_components/Landing/Landing';
import { LoadingProvider } from '@contexts/LoadingContext';
import Loader from '@components/Loader/Loader';

export default function Home() {
  return (
    <LoadingProvider>
      <Loader />
      <main style={{ backgroundColor: 'white', scrollBehavior: 'smooth' }}>
        <div id="landing">
          <Landing />
        </div>
      </main>
    </LoadingProvider>
  );
}
