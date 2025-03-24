import { useContext, useState } from 'react'
import ListProduct from '../../contexts/ListProduct'
import AllAndNewItems from '../AllAndNewItems'
import styles from './styles.module.css'

export default function NewItem () {
    const {arrayProducts, setArrayProducts} = useContext(ListProduct)
    const [nameProduct, setNameProduct] = useState('')
    const [qtdProduct, setQtdProduct] = useState(0)
    const [priceProduct, setPriceProduct] = useState(0)
    const [categoryProduct, setCategoryProduct] = useState('')
    const [descriptionProduct, setDescriptionProduct] = useState('')

    const currentId = () => {
        let valueMore = 0
        arrayProducts.forEach( (obj) => {
            if (obj.id > valueMore) {
                valueMore = obj.id
            }
        })
        return valueMore + 1
    }

    const handleClick = (ev) => {
        ev.preventDefault()
        const dataNow = new Date().toLocaleDateString()

        const newProduct = {
            product: nameProduct,
            id: currentId(),
            quantity: qtdProduct,
            price: priceProduct,
            category: categoryProduct,
            description: descriptionProduct,
            day: `${dataNow}`
        }

        setNameProduct('')
        setQtdProduct(0)
        setPriceProduct(0)
        setCategoryProduct('')
        setDescriptionProduct('')

        arrayProducts.push(newProduct)
        localStorage.setItem('gestor-estoque', JSON.stringify(arrayProducts))
    }

    return (

        <div>
            <AllAndNewItems />
            <hr />

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
                            onChange={ (ev) => setQtdProduct(+ev.target.value) }
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
                            id="description" 
                            rows={5}
                            value={descriptionProduct}
                            onChange={ (ev) => setDescriptionProduct(ev.target.value)}
                        ></textarea>

                        <button className={styles.btnSubmit} type="submit">Salvar</button>
                    </div>
                </div>
            </form>

        </div>

        
    )
}

/*
    const handleClick = (ev) => {
        ev.preventDefault()
        
    }



*/