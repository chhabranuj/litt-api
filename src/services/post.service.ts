import axios from 'axios'; 

export class PostService {

    constructor() {
    }

    public insert = async() => {
        try {
            const response = await axios.get('https://api.wazirx.com/api/v2/tickers')
            return response.data;

        }
        catch(error) {
            console.log(error);
        }
    }
}