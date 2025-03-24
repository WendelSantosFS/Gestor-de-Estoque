import { useContext } from "react"
import stylesPages from './stylesPages.module.css'
import ListProduct from "../contexts/ListProduct"
import { Link, useParams } from "react-router-dom"
import AllAndNewItems from "../components/AllAndNewItems"


export default function ItemStock () {
    const { itemID } = useParams()
    const {arrayProducts, setArrayProducts} = useContext(ListProduct)
    const itemInStock = arrayProducts.find( (item) => item.id === +itemID )

    if (!itemInStock) {
        return <div>
            <h2>Item não existe!</h2>
            <Link to={'/estoque'}>
                <button style={{color: '#000'}} >Voltar para a página de ESTOQUE.</button>
            </Link>
        </div>
    }

    const removeProduct = (id) => {
        const updateArray = arrayProducts.filter( (product) => product.id !== id)
        setArrayProducts(updateArray)
        
        localStorage.setItem('gestor-estoque', JSON.stringify(updateArray))
    }

    return (
        <div>
            
            <AllAndNewItems />
            <hr />

            <div className={stylesPages.nameAndBtns}>
                <h2>{itemInStock.product}</h2>

                <div className={stylesPages.btnsItemStock}>
                    <Link to={`/estoque/${itemInStock.id}/update`}>
                        <button className={stylesPages.btnUpdateItem}>Atualizar</button>
                    </Link>

                    <button
                    onClick={ () => removeProduct(itemInStock.id) }
                    className={stylesPages.btnDeleteItem}
                    >
                        Excluir
                    </button>
                </div>
                
            </div>

            <div>
                <div className={stylesPages.blockInfo}>
                    <p>Categoria: {itemInStock.category}</p>
                    <p>Quantidade em estoque: {itemInStock.quantity}</p>
                    <p>Preço: R$ {itemInStock.price} reais</p>
                </div>

                <p>{itemInStock.description}</p>

                <div className={stylesPages.createAndUpdateInfo}>    
                    <p>Cadastrado em: {itemInStock.day}</p>
                    <p>Atualizado em: {!itemInStock.updateAt ? 'Não foi atualizado!' : itemInStock.updateAt}</p>
                </div>
            </div>
        </div>
    )
}