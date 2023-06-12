import Image from 'next/image';
import Link from 'next/link';
import { pagesPath, staticPath } from '../../../../utils/$path';
import { useState } from 'react';

const GlobalHeader = () => {
  const [isMenuOpen, setIsMenuOpen] = useState();

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
        <div className="flex items-center gap-x-1">
          <button
            aria-label={isMenuOpen ? 'メニューを閉じる' : 'メニュー'}
            className="relative z-10 block h-4 w-5 bg-tomato"
          >
            <span className="absolute top-0 block h-[2px] w-5 rounded-full bg-white"></span>
            <span className="block  h-[2px] w-5 rounded-full bg-white"></span>
            <span className="absolute bottom-0 block h-[2px] w-5 rounded-full bg-white"></span>
          </button>
          <span className="text-bodySmall/none uppercase text-white">menu</span>
        </div>

        {/* メニュー */}
        <nav className="fixed">
          <ul>
            <li>
              <Link href={pagesPath.$url()}>あああ</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default GlobalHeader;
