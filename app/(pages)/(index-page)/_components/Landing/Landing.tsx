import Form from './_components/Form/Form';
import Image from 'next/image';
import PostDoeIMG from '@/public/postDOE/charstackbf.png';

export default function Landing() {
  return (
    <main className="tw-max-w-full tw-overflow-hidden">
      <div className="tw-relative tw-h-screen tw-w-full tw-min-w-full">
        <Image src={PostDoeIMG} alt="PostDoeIMG" fill objectFit="cover" />
      </div>
      <div className="tw-absolute tw-left-6 tw-top-1/4 tw-z-10 tw-max-w-[calc(100%-3rem)] md:tw-left-36">
        <Form />
      </div>
    </main>
  );
}
