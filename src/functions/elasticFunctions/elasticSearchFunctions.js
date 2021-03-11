
const url = 'http://localhost:4200';

const url_search = (index,query,k) => `${url}/${index}/${query}/${k}/search`;
export const get = () =>{
    return fetch(url).then((response)=>{
        let msg = response.json()
        return msg;
    });
}

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