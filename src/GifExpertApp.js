import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

 //   const categories = ['One Punch', 'Samurai x', 'Dragon Ball'];
const [categories, setCategories] = useState(['One Punch']);

// const handleAdd = () =>{
//     //dos formas de agregar 
//     //1
//     setCategories([...categories,'Power Ranger']); 
//     //2
//     //setCategories(cats =>[...cats, 'power Ranger']);
// }

return ( 
        <>
          <h2>GifExpertApp</h2> 
          <AddCategory setCategories={setCategories}/>
          <hr/>

          
          <ol>
            {
                //Key es obligatorio y es una buena practica 
                categories.map(category =>(
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
         </ol> 
        </>
    )
}
