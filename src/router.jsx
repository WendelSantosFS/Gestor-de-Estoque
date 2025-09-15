import { createBrowserRouter, BrowserRouter, Routes, Route } from "react-router-dom";
import LayoutRoot from "./pages/LayoutRoot";
import Home from './pages/Home'
import UpdateItem from './pages/UpdateItem'
import Stock from './pages/Stock'
import ItemStock from "./pages/ItemStock";
import NewItem from "./components/NewItem";

const router = createBrowserRouter([
    {
        path: "/Gestor-de-Estoque/",
        element: <LayoutRoot />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "estoque",
                element: <Stock />
            }, {
                path: "estoque/:itemID",
                element: <ItemStock />
            },
            {
                path: "estoque/:itemID/update",
                element: <UpdateItem />
            }
            ,
            {
                path: "estoque/newItem",
                element: <NewItem />
            }
        ]
    }
    
])
export default router