import { useState } from 'react';
import CategoryAdd from './components/CategoryAdd';
import GifGrid from './components/GifGrid'
//
const GifExpertApp = ({ defaultCategories = [] }) => {
    const [categories, setCategories] = useState( defaultCategories )
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