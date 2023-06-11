import GlobalFooter from '../GlobalFooter';
import GlobalHeader from '../GlobalHeader';

type Props = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <a href="#mainContainer" className="c-visually-hidden">
        本文へ移動
      </a>
      <GlobalHeader />
      <main className="flex-grow" id="mainContainer">
        {children}
      </main>
      <GlobalFooter />
    </div>
  );
};

export default GlobalLayout;
