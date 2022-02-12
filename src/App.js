import Banner from "./Components/Banner";
import Explicacion from "./Components/Explicacion";
import Presentacion from "./Components/Presentacion";
import StickyFooter from "./Components/StickyFooter";
import { MainLayout } from "./Style/Layout";


function App() {
  return (
      <>
      <MainLayout>
      <Banner/>
      <Explicacion/>
      <Presentacion/>
      <StickyFooter/>
      </MainLayout>
      </>
  );
}

export default App;
