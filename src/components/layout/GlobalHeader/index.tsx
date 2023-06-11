import Image from 'next/image';
import Link from 'next/link';
import { pagesPath, staticPath } from '../../../../utils/$path';

const GlobalHeader = () => {
  return (
    <header className="fixed z-10 w-full">
      <div className="container z-10 mx-auto flex h-14 items-center justify-between px-4">
        <h1>
          <Link href={pagesPath.$url()}>
            <Image
              src={staticPath.logo_svg}
              alt="DIGSMILE INC."
              width={189}
              height={20}
            />
            <span className="c-visually-hidden">ホーム</span>
          </Link>
        </h1>
        <div>
          <span className="text-bodySmall/none uppercase text-white">menu</span>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
