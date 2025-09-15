export default function useStock (array, setArray) {
    const keyLocalStorage = 'gestor-estoque'
  
    function recentItems () {
        const dayToday = new Date()
        const dayBefore = new Date()
        dayBefore.setDate( dayToday.getDate() - 10)
        
        const itensRecentes = []
        
        array.forEach( (data) => {
            if (data.day >= dayBefore.toLocaleDateString()) {
                itensRecentes.push(data)
            }
        } )

        return itensRecentes.length
    }

    function removeProduct (id) {
        const updateArray = array.filter( (product) => product.id !== id)
        setArray(updateArray)
        
        localStorage.setItem(keyLocalStorage, JSON.stringify(updateArray))
    }

    return  { recentItems, removeProduct }
}