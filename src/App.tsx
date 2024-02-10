import AgreementsStep from "./features/AgreementsStep";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";
import { DocSelectorProvider } from "./context/docSelectorContext";
import SaveChanges from "./components/shared/SaveChanges";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex w-full">
        <Navbar />
        <div className="w-full">
          <Header />
          <DocSelectorProvider>
            <AgreementsStep />
          </DocSelectorProvider>
          <SaveChanges />
        </div>
      </div>
    </div>
  );
}

export default App;