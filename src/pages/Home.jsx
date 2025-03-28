import { useContext } from "react"
import ListProduct from "../contexts/ListProduct"
import stylesPages from './stylesPages.module.css'
import { Link } from "react-router-dom"
import useStock from "../hooks/useStock"

export default function Home () {
    const {arrayProducts, setArrayProducts} = useContext(ListProduct)
    let arrayRenderResults = arrayProducts.filter( (product) => product.quantity < 10 )

    const { recentItems } = useStock(arrayProducts)

    return (
        <>
            <h1>Dashboard</h1>
            <div className={stylesPages.earlyInfoStock}>
                <div className={stylesPages.childInfoStock1}>
                    <p>Diversidade de itens</p>
                    <h2>{arrayProducts.length}</h2>
                </div>

                <div className={stylesPages.childInfoStock2}>
                    <p>Inventário total</p>
                    <h2>{arrayProducts.reduce( (result, param) => {
                        return result += +param.quantity
                    }, 0 )}</h2>
                </div>

                <div className={stylesPages.childInfoStock3}>
                    <p>Itens recentes</p>
                    <h2>{ recentItems() }</h2>
                </div>

                <div className={stylesPages.childInfoStock4}>
                    <p>Itens acabando</p>
                    <h2>{ arrayProducts.filter( (product) => product.quantity < 11).length }</h2>
                </div>
            </div>


            <div className={stylesPages.mainSummary}>
                <div className={stylesPages.betweenSummary}>
                    <div className={stylesPages.childSummary}>
                        <h5>Itens recentes</h5>
                        <p>Ações</p>
                    </div>

                    <div className={stylesPages.renderResults}>
                        {arrayProducts.map( (product) => (
                            <div key={product.id} className={stylesPages.renderElements}>
                                <p>{product.product}</p>
                                <Link to={`/estoque/${product.id}`}>
                                    <button>Ver</button>
                                </Link>
                            </div>
                        ) )}
                    </div>
                </div>

                <div className={stylesPages.betweenSummary}>
                    <div className={stylesPages.childSummary}>
                        <h5>Itens acabando</h5>
                        <p>Qtd</p>
                        <p>Ações</p>
                    </div>

                    <div className={stylesPages.renderResults}>
                        {arrayRenderResults.map( (product) => (
                            <div key={product.id} className={stylesPages.renderElements}>
                                <p className={stylesPages.renderParagraphName}>{product.product}</p>
                                <p className={stylesPages.renderParagraphQtd}>{product.quantity}</p>
                                <Link to={`/estoque/${product.id}`}>
                                    <button>Ver</button>
                                </Link>
                            </div>
                        ) )}
                    </div>
                </div>
            </div>


        </>
    )
}