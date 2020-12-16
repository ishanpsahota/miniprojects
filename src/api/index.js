import axios from 'axios'


const url = "https://api.github.com/"

var url_json = {
    user: url + 'users/',
    repos: url + 'search/repositories?q='
}

export default {
    
    get_urls() {
        return url_json;
    },

    get_items(search, type) {
        if (!search || !type ) return
        else
            
            for(var url_type in url_json)
            {
                if(url_type == type.toLowerCase())
                {
                    return new Promise((resolve, reject) => {
                        axios.get(this.get_urls()[url_type] + search)
                        .then(res => {
                            resolve(res)
                        }).catch(err => {
                            reject(err)
                        })
                    })
                }
            }
    }

}