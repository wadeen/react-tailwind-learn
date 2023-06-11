type Props = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  text: string;
  size?: 'sm' | 'md';
  className?: string;
};

const TitleComponent = ({ as = 'h2', text, size = 'sm', className }: Props) => {
  const Tag = as as keyof JSX.IntrinsicElements;
  return (
    <Tag
      className={`font-monster font-extrabold uppercase ${
        size === 'md' ? 'text-32/none' : 'text-28/none'
      } ${className && className}`}
    >
      {text}
    </Tag>
  );
};

export default TitleComponent;
