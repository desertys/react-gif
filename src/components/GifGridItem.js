import React from 'react'

export const GifGridItem = (img) => {
    //console.log(img);

    return (
        <div className="card animate__rubberBand">
          <img src={img.img.url} alt= {img.img.title}/>
          <p>{img.img.title}</p>
        </div>
    )
}
