import { Routes, Route } from "react-router-dom";

import { Contact } from "./Pages/Contact";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { Layout } from "./Layout/Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/inicio" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/productos" element={<Layout />}>
          <Route index element={<h1>Todos los productos</h1>} />
          <Route path="salados" element={<h1>Todos los salados</h1>} />
          <Route path="dulces" element={<h1>Todos los dulces</h1>} />
          <Route
            path="personalizados"
            element={<h1>Todos los personalizados</h1>}
          />
        </Route>

        <Route path="/quienessomos" element={<Layout />}>
          <Route index element={<h1>Todo sobre quienes somos</h1>} />
        </Route>

        <Route path="/contacto" element={<Layout />}>
          <Route index element={<h1>Todo contacto</h1>} />
        </Route>

        {/* <Route path="/productos" element={<Products />} />
        <Route path="contacto" element={<Contact />} /> */}
      </Routes>
    </>
  );
}

export default App;
