import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('');

    //regoge los datos del input 
    const handleInputChange = (e)=>{
  
        setInputValue( e.target.value);
    }

    //metodo para enviar informacion al componente padre
    const handleSubmit = (e)=>{
        e.preventDefault();
     
        if(inputValue.trim().length>2){
            //control de categoria a insertar 
        setCategories(cats =>[inputValue,...cats]);
        setInputValue(''); 
        
        }
    }


    return (
        <form onSubmit={handleSubmit}>
        
        
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}


AddCategory.propTypes={

    setCategories: PropTypes.func.isRequired
}
