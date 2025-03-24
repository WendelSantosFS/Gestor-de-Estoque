import { useContext, useState } from 'react'
import ListProduct from '../../contexts/ListProduct'
import styles from '../NewItem/styles.module.css'
import { useParams } from 'react-router-dom'

export default function UpdateItemComponent ( {name, quantity, price, category, description, id, day} ) {
    const {arrayProducts, setArrayProducts} = useContext(ListProduct)
    const { itemID } = useParams()
    const [nameProduct, setNameProduct] = useState(name)
    const [qtdProduct, setQtdProduct] = useState(quantity)
    const [priceProduct, setPriceProduct] = useState(price)
    const [categoryProduct, setCategoryProduct] = useState(category)
    const [descriptionProduct, setDescriptionProduct] = useState(description)

    const handleClick = (ev) => {
        ev.preventDefault()
        const updateAt = new Date().toLocaleDateString()

        const newProduct = {
            product: nameProduct,
            id,
            quantity: qtdProduct,
            price: priceProduct,
            category: categoryProduct,
            description: descriptionProduct,
            day,
            updateAt,
        }

        arrayProducts.splice(id - 1, 1, newProduct)

        setNameProduct('')
        setQtdProduct(0)
        setPriceProduct(0)
        setCategoryProduct('')
        setDescriptionProduct('')
        
        localStorage.setItem('gestor-estoque', JSON.stringify(arrayProducts))
    }

    return (

        <div>

            <form onSubmit={handleClick}>
                <div className={styles.firstContent}>
                    <div className={styles.childContent}>
                        <label htmlFor="name">Nome</label>
                        <input 
                            type="text" 
                            id="name"
                            value={nameProduct}
                            onChange={ (ev) => setNameProduct(ev.target.value) }
                            placeholder='Digite o nome do PRODUTO'
                            required
                        />
                    </div>

                    <div className={styles.childContent}>
                        <label htmlFor="quantity">Quantidade</label>
                        <input 
                            type="number" 
                            min={0} 
                            id="quantity"
                            value={qtdProduct}
                            onChange={ (ev) => setQtdProduct(ev.target.value) }
                            required
                        />
                    </div>

                    <div className={styles.childContent}>
                        <label htmlFor="price">Preço</label>

                        <input 
                            type="number"
                            step={0.01}
                            min={0}
                            id="price"
                            value={priceProduct}
                            onChange={ (ev) => setPriceProduct(ev.target.value)}
                            required
                        />
                    </div>

                    <div className={styles.childContent}>
                        <label htmlFor="category">Categoria</label>

                        <select 
                            required 
                            id="category"
                            name='category'
                            value={categoryProduct}
                            onChange={ (ev) => setCategoryProduct(ev.target.value)}
                        >
                            <option value=''>Selecione uma categoria...</option>
                            <option value='jogos'>Jogos</option>
                            <option value='livros'>Livros</option>
                            <option value='livraria'>Livraria</option>
                            <option value='mochilas'>Mochilas</option>
                        </select>
                    </div>
                </div>
            

                <div className={styles.secondContent}>
                    <div className={styles.childContentDescription}>
                        <label htmlFor="description">Descrição</label>

                        <textarea 
                            required 
                            name="" 
                            id="description" 
                            rows={5}
                            value={descriptionProduct}
                            onChange={ (ev) => setDescriptionProduct(ev.target.value)}
                        ></textarea>

                        <button className={styles.btnSubmit} type="submit">Atualizar</button>
                    </div>
                </div>
            </form>

        </div>

        
    )
}