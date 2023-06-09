import GlobalFooter from "../GlobalFooter";
import GlobalHeader from "../GlobalHeader";

type Props = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </div>
  );
};

export default GlobalLayout;
