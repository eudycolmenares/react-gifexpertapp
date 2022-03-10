import { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid'
//
const GifExpertApp = () => {
    const [categories, setCategories] = useState(
        ['Dragon Ball']
    )
    // const handleAdd = () => {
    //     setCategories( cats => [...cats, 'Shaman King'] )
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <CategoryAdd setCategories={ setCategories } />
            <hr />
            <ol>
                {
                    categories.map(category => 
                        <GifGrid 
                            category={ category }
                            key={category} 
                        />
                    )
                }
            </ol>
        </>
    )
}
// 
export default GifExpertApp