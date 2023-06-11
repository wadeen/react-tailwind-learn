import GlobalFooter from '../GlobalFooter';
import GlobalHeader from '../GlobalHeader';

type Props = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex min-h-screen flex-col bg-bg-secondary">
      <GlobalHeader />
      <main className="flex-grow">{children}</main>
      <GlobalFooter />
    </div>
  );
};

export default GlobalLayout;
