import Api from './Api'



export default {
    async purchase(creds){        
        return Api.post('payment', creds)
    },   
}