import { useContext } from "react"
import { useParams } from "react-router-dom"
import ListProduct from "../contexts/ListProduct"
import AllAndNewItems from "../components/AllAndNewItems"
import UpdateItemComponent from "../components/UpdateItemComponent"

export default function UpdateItem () {
    const {arrayProducts, setArrayProducts} = useContext(ListProduct)
    const { itemID } = useParams()
    const productUpdate = arrayProducts.find( (product) => product.id === +itemID)

    return (
        <div>
            <AllAndNewItems />
            <hr />
            
            <h2>Atualizar Item - {productUpdate.product}</h2>

            <UpdateItemComponent
                name={productUpdate.product}
                quantity={productUpdate.quantity}
                price={productUpdate.price}
                category={productUpdate.category}
                description={productUpdate.description}
                id={productUpdate.id}
                day={productUpdate.day}
            />
        </div>
    )
}