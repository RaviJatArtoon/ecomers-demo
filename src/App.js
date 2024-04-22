import CommanRoute from "./router/CommanRoute";
import "../src/assest/style/globle.scss";
import RoutesComponent from "./router/RoutesComponent";
import { Toaster } from "sonner";

function App() {
  // <CommanRoute/>
  return (
    <>
      <RoutesComponent />
      <Toaster position="top-right" richColors />;
    </>
  );
}

export default App;
