import React from 'react'
import { useFechGifs } from '../hooks/useFetchGifs'
import {GifGridItem} from './GifGridItem' ;

export const GifGrid = ({category}) => {
 //esta desestructurada y cambiamos nombre a data por images
    const {data:images, loading} = useFechGifs(category);

 
    

    return (
        <>
            <h3> {category} </h3>
            {/* {loading ? 'cargando ..': 'data cargada'} */}
            {loading && <p>loading..</p>}
            <div className="card-grid" >
          
              <ol>
                  {
                    images.map(img=>(
                        <GifGridItem 
                        key= {img.id}
                        img={img}
                        />
                    ))
                     }
                </ol>
            </div>
        </>
    )
}
