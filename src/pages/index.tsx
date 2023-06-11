import Image from 'next/image';
import { pagesPath, staticPath } from '../../utils/$path';
import TitleComponent from '@/components/title';
import ButtonLink from '@/components/button';
import CardLayout from '@/components/cardLayout';
import { GetStaticProps } from 'next';
import Link from 'next/link';

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3000/article.json');
  const data = await res.json();
  return {
    props: {
      data: data,
    },
  };
};

type ArticleType = {
  title: string;
  date: string;
  link: string;
};

type Props = {
  data: ArticleType[];
};

const Home = ({ data }: Props) => {
  return (
    <div className="">
      {/* KV */}
      <section className="relative mb-20  h-[666px] max-w-[1440px] ">
        <span className="absolute right-0 z-0  ml-auto block h-full w-[75.467vw] bg-primary" />
        <div className="z-1 relative">
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

      {/* ~two sections~ */}
      <div className="mb-10 grid grid-rows-2 gap-y-10 bg-gray px-5 pb-10 pt-10">
        {/* Works */}
        <CardLayout
          title="works"
          img={{
            alt: '',
            path: staticPath.works_jpg,
          }}
          button={{
            link: pagesPath.$url(),
          }}
          description="DIGSMILEの制作実績を紹介します。"
        />
        {/* Culture */}
        <CardLayout
          title="culture"
          img={{
            alt: '',
            path: staticPath.culture_jpg,
          }}
          button={{
            link: pagesPath.$url(),
          }}
          description="DIGSMILEの社内文化について紹介します。"
        />
      </div>

      {/* Latest topics */}
      <section className="mb-10 px-5">
        <TitleComponent text="latest topics" className="mb-6" />
        <div className="mb-7">
          {data.map((item, i) => (
            <article key={i}>
              <Link
                href={item.link}
                className="block border-b border-border-main"
              >
                <time
                  dateTime={item.date}
                  className="mb-2 text-10/none text-gray-thin"
                >
                  {item.date}
                </time>
                <h3 className="text-bold pb-2 text-12 tracking-wide">
                  {item.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
        <ButtonLink href={pagesPath.$url()} />
      </section>

      {/* Contact */}
      <section className="bg-gray px-5 py-8">
        <div className="mb-7">
          <Image src={staticPath.contact_jpg} alt="" width={580} height={390} />
        </div>
        <div>
          <TitleComponent text="contact" className="mb-7" />
          <p className="mb-7 text-body/8 tracking-normal">
            制作の依頼、取材の依頼、IRや採用についての連絡・お問い合わせはコンタクトページから承っております。
            <br />
            まずはお気軽にご連絡ください。担当者から改めて返信いたします。
          </p>
          <ButtonLink href={pagesPath.$url()} />
        </div>
      </section>
    </div>
  );
};

export default Home;
