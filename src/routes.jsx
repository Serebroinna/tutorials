import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NuevoVideo from "./pages/NuevoVideo";
import GlobalContextProvider from "./context/GlobalContext";

function AppRoutes() {

  return (
    <BrowserRouter>
      <Header />
      <GlobalContextProvider>
        <Routes>
          <Route path="/" element={<Inicio />}></Route>
          <Route path="/add" element={<NuevoVideo />}></Route>
        </Routes>
      </GlobalContextProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
