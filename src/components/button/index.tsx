import Link from 'next/link';
import { UrlObject } from 'url';

type Props = {
  href: UrlObject;
  text?: string;
  className?: string;
};

/**
 * 初期値
 */
const defaultText = 'read more';

const ButtonLink = ({ href, text = defaultText, className }: Props) => {
  return (
    <Link
      href={href}
      className={`${className} grid h-9 w-40 place-content-center bg-black font-monster text-11/8 font-bold uppercase text-white`}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
