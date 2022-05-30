
 

export  const getGifs = async(category)=>{
    const url=`https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=alA6qrqYAGyIa6ep39rpBotIMiD1G66I`;
    const resp= await fetch (url);
    const {data} = await resp.json();

    const gifs = data.map(img =>{
        return{
            id: img.id, 
            title: img.title, 
            //el signo de interrogaciion es si no hay url
            url: img.images?.downsized_medium.url
        }
    })

    //console.log(gifs);
    return gifs;
}