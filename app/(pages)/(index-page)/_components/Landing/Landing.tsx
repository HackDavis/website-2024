import Form from './_components/Form/Form';
import Image from 'next/image';
import PostDoeIMG from '@/public/postDOE/charstackbf.png';

export default function Landing() {
  return (
    <main className="tw-overflow-hidden">
      <Image
        className="tw-left-0 tw-top-0 tw-h-screen-4/5 tw-w-full"
        src={PostDoeIMG}
        alt="PostDoeIMG"
      ></Image>
      <div className="tw-absolute tw-left-20 tw-top-1/4 tw-z-10">
        <Form />
      </div>
    </main>
  );
}
