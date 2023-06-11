import Image from 'next/image';
import { pagesPath, staticPath } from '../../utils/$path';
import TitleComponent from '@/components/title';
import ButtonLink from '@/components/button';

const Home = () => {
  return (
    <div className="">
      {/* KV */}
      <section className="relative mb-20  h-[666px] max-w-[1440px] ">
        <span className="absolute right-0 z-0  ml-auto block h-full w-[75.467vw] bg-primary" />
        <div className="relative z-10">
          <div className="relative h-[580px] w-[73.467vw]  ">
            <Image
              src={staticPath.kv_jpg}
              alt="母親が赤ちゃんに対してキスをしている様子"
              fill
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <h2 className="absolute right-[7%] top-[38%] h-6 w-fit tracking-wider text-white">
            <span className="block text-base">
              デザインで人を笑顔にする会社
            </span>
            <span className="mb-2 block font-monster text-base uppercase">
              DIGSMILE INC.
            </span>
            <span className="block font-monster text-56/none uppercase">
              design
              <br />
              for <br />
              smile.
            </span>
          </h2>
        </div>
      </section>

      {/* About us */}
      <section className="bg-[url('/about-bg-sp.jpg')]  bg-cover  bg-center bg-no-repeat px-5 py-12  md:bg-[url('/about-bg.jpg')]">
        <div className="bg-white px-7 py-12 opacity-95">
          <TitleComponent text="about us" className="mb-6" />
          <p className="mb-7 text-sm/7">
            DIGSMILEは、デザインで人を笑顔にする会社。
            <br />
            なんでもない日常に少しのワクワクと遊び心を提供します。笑顔には世界を変える力がある、デザインには人を幸せにする力がある。毎日に幸せを感じて生きていきたい。
            <br />
            DIGSMILEの社名にはそんな想いが込められています。
          </p>
          <ButtonLink href={pagesPath.$url()} />
        </div>
      </section>
    </div>
  );
};

export default Home;
