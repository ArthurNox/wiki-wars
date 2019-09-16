import axios from 'axios';

export function get(url){
    return new Promise ((resolve) => {
        axios.get(url).then(res => {
            resolve(res)
        })
    })
}

