import { useState } from "react"
import PropTypes from 'prop-types'

const CategoryAdd = ({ setCategories }) => {
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue( e.target.value )
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if ( inputValue.trim().length > 3 ) {
            setCategories( categories => [inputValue, ...categories] )
            setInputValue('')
        }
    }
    // 
    return (
        <form onSubmit={ handleSubmit }>
            {/* Temporal */}
            <p>{ inputValue }</p> 
            <input 
                type="text" 
                value={ inputValue } 
                onChange={ handleInputChange }
            />
        </form>
    )
}
CategoryAdd.propTypes = {
    setCategories: PropTypes.func.isRequired
}
// 
export default CategoryAdd