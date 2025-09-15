import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListProduct from './contexts/ListProduct';
import { useState } from "react";

import LayoutRoot from "./pages/LayoutRoot";
import Home from './pages/Home'
import UpdateItem from './pages/UpdateItem'
import Stock from './pages/Stock'
import ItemStock from "./pages/ItemStock";
import NewItem from "./components/NewItem";

export default function App() {
  let [arrayProducts, setArrayProducts] = useState( () => {
    const varCurrent = localStorage.getItem('gestor-estoque')
    return varCurrent ? JSON.parse(varCurrent) : []
  } )
// adsf
  return (
    <ListProduct.Provider value={{arrayProducts, setArrayProducts}}>
       <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayoutRoot />} >
                  <Route index element={<Home />} />
                  <Route path="estoque" element={<Stock />} />
                  <Route path="estoque/newItem" element={<NewItem />} />
                  <Route path="estoque/:itemID" element={<ItemStock />} />
                  <Route path="estoque/:itemID/update" element={<UpdateItem />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </ListProduct.Provider>
  )
}

/*

*/