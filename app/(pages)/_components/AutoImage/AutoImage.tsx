import Image from 'next/image';

export default function AutoImage({
  height: _,
  width: __,
  src,
  alt,
  style,
  ...rest
}: {
  height?: number;
  width?: number;
  src: string;
  alt: string;
  style?: object;
}) {
  return (
    <Image
      src={src}
      height={4000}
      width={4000}
      alt={alt}
      {...rest}
      style={style ?? { width: '100%', height: 'auto' }}
    />
  );
}
