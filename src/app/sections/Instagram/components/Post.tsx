import Image from "next/image";
import { AnchorHTMLAttributes } from "react";

type PostProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  src: string;
  alt: string;
};

export function Post(props: PostProps) {
  return (
    <a className="w-80 h-80 overflow-hidden" {...props}>
      <Image
        className="w-full h-full hover:brightness-50 hover:scale-105 transition-all duration-500 ease-in-out"
        src={props.src}
        width={320}
        height={320}
        alt="..."
        draggable={false}
      />
    </a>
  );
}
