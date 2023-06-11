import Image from 'next/image';
import Link from 'next/link';
import { pagesPath, staticPath } from '../../../../utils/$path';

const GlobalHeader = () => {
  return (
    <header className="w-full fixed bg-secondary">
      <div className="container mx-auto h-14 flex justify-between items-center px-4">
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
