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
      <section className="relative mx-auto mb-20 h-[666px] max-w-[1440px] lg:h-[740px]">
        <span
          className="absolute right-0   -z-10 ml-auto block h-full w-[75.467vw] bg-primary lg:max-w-[740px]"
          role="presentation"
        />
        <div className="z-1 relative ">
          <div className="relative h-[580px] w-[73.467vw] md:w-[78.125vw] lg:h-[640px] lg:max-w-[1100px]">
            <Image
              src={staticPath.kv_jpg}
              alt="母親が赤ちゃんに対してキスをしている様子"
              fill
              className="h-auto w-full object-cover object-top"
            />
          </div>
          <h2 className="absolute right-[7%] top-[38%] h-6 w-fit tracking-wider text-white md:right-[12%]  lg:right-[190px]">
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
      <section className="relative z-10 mx-auto bg-[url('/about-bg-sp.jpg')] bg-cover bg-center bg-no-repeat px-5 py-12 lg:container md:bg-[url('/about-bg.jpg')] lg:px-12">
        <div className="max-w-[590px] bg-white px-7 py-12 opacity-95 md:mx-auto lg:mx-0">
          <TitleComponent text="about us" className="mb-6" />
          <p className="mb-7 text-sm/7 md:text-body">
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
      <div className="mb-10  bg-gray px-5 pb-10 pt-10 lg:-z-10 lg:mb-14 lg:mt-[-100px] lg:pb-14 lg:pt-44">
        <div className=" grid grid-rows-2 gap-y-10 lg:container lg:mx-auto lg:grid-cols-2 lg:grid-rows-none lg:gap-x-14">
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
      </div>

      {/* Latest topics */}
      <section className="mb-10 px-5 lg:container lg:mx-auto lg:mb-14">
        <TitleComponent text="latest topics" className="mb-6" />
        <div className="mb-7 lg:ml-auto lg:max-w-[700px]">
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
                <h3 className="text-bold pb-2 text-12 tracking-wide lg:text-sm">
                  {item.title}
                </h3>
              </Link>
            </article>
          ))}
        </div>
        <ButtonLink href={pagesPath.$url()} className="lg:ml-auto" />
      </section>

      {/* Contact */}
      <section className="bg-gray px-5 py-8 md:pb-20 md:pt-14">
        <div className="lg:container lg:mx-auto lg:flex lg:flex-row-reverse lg:items-center lg:gap-20">
          <figure className="mb-7 max-w-[520px] lg:max-w-[590px]">
            <Image
              src={staticPath.contact_jpg}
              alt=""
              width={580}
              height={390}
            />
          </figure>
          <div className="lg:max-w-[440px]">
            <TitleComponent text="contact" className="mb-7" />
            <p className="mb-7 text-body/8 tracking-normal">
              制作の依頼、取材の依頼、IRや採用についての連絡・お問い合わせはコンタクトページから承っております。
              <br />
              まずはお気軽にご連絡ください。担当者から改めて返信いたします。
            </p>
            <ButtonLink href={pagesPath.$url()} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
