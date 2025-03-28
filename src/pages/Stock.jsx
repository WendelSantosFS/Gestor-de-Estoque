import { useContext } from 'react'
import ListProduct from '../contexts/ListProduct'
import stylesPages from './stylesPages.module.css'
import { Link } from 'react-router-dom'
import AllAndNewItems from '../components/AllAndNewItems'
import useStock from '../hooks/useStock'

export default function Stock () {
    const {arrayProducts, setArrayProducts} = useContext(ListProduct)

    const { removeProduct } = useStock(arrayProducts, setArrayProducts)

    return (
        <>
            <h1>Stock Items</h1>

            <div >
                <AllAndNewItems styleOut={stylesPages.onActive}/>

                <hr />

                <div>
                    <div className={stylesPages.infoProductsAll}>
                        <p className={stylesPages.infoId}>ID</p>
                        <p className={stylesPages.infoName}>Nome</p>
                        <p className={stylesPages.infoInStock}>Em estoque</p>
                        <p className={stylesPages.infoCategory}>Categoria</p>
                        <p className={stylesPages.infoAction}>Ações</p>
                    </div>

                    { arrayProducts.length > 0 ? arrayProducts.map( (product) => (
                        <div key={product.id} className={stylesPages.renderInStock}>
                            <p id={`${product.id}/product`} className={stylesPages.renderId}>{product.id}</p>
                            <p className={stylesPages.renderName}>{product.product}</p>
                            <p className={stylesPages.renderInStock}>{product.quantity} unid.</p>
                            <p className={stylesPages.renderCategory}>{product.category}</p>
                            
                            <div className={stylesPages.renderBtns}>
                                <Link to={`/estoque/${product.id}`}>
                                    <button className={stylesPages.viewItem}>Ver</button>
                                </Link>
                                <Link to={`/estoque/${product.id}/update`}>
                                    <button className={stylesPages.updateItem}>Atualizar</button>
                                </Link>

                                <button
                                    onClick={ () => removeProduct(product.id)}
                                    className={stylesPages.deleteItem}
                                >Excluir
                                </button>
                                
                            </div>
                        </div>
                    ) ) : <p>Ainda não tem produtos cadastrados!</p>}
                </div>


            </div>
        </>
    )
}