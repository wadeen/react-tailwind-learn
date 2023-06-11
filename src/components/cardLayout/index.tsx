import Image from 'next/image';
import TitleComponent from '../title';
import ButtonLink from '../button';
import { UrlObject } from 'url';

type Props = {
  title: string;
  img: {
    alt?: string;
    path: string;
  };
  description?: string;
  button: {
    link: UrlObject;
    text?: string;
  };
};

const CardLayout = ({ title, img, description, button }: Props) => {
  return (
    <section>
      <TitleComponent text={title} className="mb-7" />
      <figure className="max-w-[520px]">
        <Image
          src={img.path}
          alt={img.alt ? img.alt : ''}
          width={520}
          height={350}
        />
      </figure>
      <p className="my-7 text-body/none">{description}</p>
      <ButtonLink href={button.link} />
    </section>
  );
};

export default CardLayout;
