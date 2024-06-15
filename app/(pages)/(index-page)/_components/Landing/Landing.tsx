import Form from './_components/Form/Form';
import Image from 'next/image';
import PostDoeIMG from '@/public/postDOE/charstackbf.png';

export default function Landing() {
  return (
    <main className="tw-overflow-hidden">
      <div className="tw-relative tw-h-screen-4/5 tw-w-full tw-min-w-full">
        <Image
          src={PostDoeIMG}
          alt="PostDoeIMG"
          fill
          sizes="100vw"
          objectFit="cover"
        />
      </div>
      <div className="tw-absolute tw-left-10 tw-top-1/4 tw-z-10 sm:tw-left-20">
        <Form />
      </div>
    </main>
  );
}
