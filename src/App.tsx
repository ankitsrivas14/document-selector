import FormViewer from "./components/FormViewer";
import Header from "./components/layout/Header";
import Navbar from "./components/layout/Navbar";

const App = () => {
  return (
    <div className="w-full min-h-screen">
      <div className="flex w-full">
        <Navbar />
        <div className="w-full">
          <Header />
          <FormViewer />
        </div>
      </div>
    </div>
  );
}

export default App;