import Image from 'next/image';
import Link from 'next/link';
import { pagesPath, staticPath } from '../../../../utils/$path';

const GlobalHeader = () => {
  return (
    <header className="fixed w-full bg-secondary">
      <div className="container mx-auto flex h-14 items-center justify-between px-4">
        <h1>
          <Link href={pagesPath.$url()}>
            <Image
              src={staticPath.logo_svg}
              alt="DIGSMILE INC."
              width={189}
              height={20}
            />
            <span className="u-visually-hidden">ホーム</span>
          </Link>
        </h1>
      </div>
    </header>
  );
};

export default GlobalHeader;
