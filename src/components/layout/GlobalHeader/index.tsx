import Image from 'next/image';
import Link from 'next/link';
import { pagesPath, staticPath } from '../../../../utils/$path';

const GlobalHeader = () => {
  return (
    <header className="w-ful z-100 fixed">
      <div className="h-14 container mx-auto flex items-center justify-between px-4">
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
          <span className="bg-tomato text-bodySmall/none uppercase text-white">
            menu
          </span>
        </div>
      </div>
    </header>
  );
};

export default GlobalHeader;
