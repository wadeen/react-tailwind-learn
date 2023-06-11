import Image from 'next/image';
import { staticPath } from '../../utils/$path';

const Home = () => {
  return (
    <div className="">
      {/* KV */}
      <div className="relative mb-5 h-screen max-w-[1440px] bg-bg-primary">
        <span className="absolute right-0 z-0  ml-auto block h-[666px] w-[75.467vw] bg-primary"></span>
        <div className="relative z-10">
          <div className="relative h-[580px] w-[73.467vw] bg-bg-secondary  ">
            <Image
              src={staticPath.kv_jpg}
              alt="母親が赤ちゃんに対してキスをしている様子"
              fill
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <div className="h-6 absolute right-[7%] top-[38%] w-fit tracking-wider text-white">
            <div className="text-base">
              <span className="block">デザインで人を笑顔にする会社</span>
              <span className="mb-2 block font-monster uppercase">
                DIGSMILE INC.
              </span>
            </div>
            <strong className="block font-monster text-56/none uppercase">
              design
              <br />
              for <br />
              smile.
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
