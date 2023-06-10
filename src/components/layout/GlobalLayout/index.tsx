import GlobalFooter from "../GlobalFooter";
import GlobalHeader from "../GlobalHeader";

type Props = {
  children: React.ReactNode;
};

const GlobalLayout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-slate-200">
      <GlobalHeader />
      <main>{children}</main>
      <GlobalFooter />
    </div>
  );
};

export default GlobalLayout;
