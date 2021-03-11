
// currently the server is not uploaded, must start the server locally
const url = 'http://localhost:4200';

// the url for the search, i set the API in the server
const url_search = (index,query,k) => `${url}/${index}/${query}/${k}/search`;

// this is just a `hello world` testing
export const get = () =>{
    return fetch(url).then((response)=>{
        let msg = response.json()
        return msg;
    });
}

// this is the main function the fetch meaning data
export const search = (index, query, k) =>{
    console.log(url_search(index,query,k));
    return fetch(url_search(index,query,k)).then((response) =>{
        let msg = response.json();
        return msg;
    });
}




export default{
    get, search
}