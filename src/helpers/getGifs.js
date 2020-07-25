
export const getGifs = async ( category ) => {
    const token = '4aDVFI71dpINvwVAflnqt60jnzypbDwG';
    const buscar = encodeURI(category);
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${token}&limit=10&q=${buscar}`

    const response = await fetch( url );
    const { data } = await response.json();
    const gifs = data.map( item => {
        return {
            id: item.id,
            title: item.title,
            url: item.images?.downsized_medium
        }
    })
    console.warn( gifs )
    return gifs 
}