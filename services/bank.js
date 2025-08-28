import * as config from '../config.js';

export const getBank = async () => {

    const url   = `${config.url_api()}/feriados/v1/`
    const options = {
        method : 'GET',
        headers: {
            accept: 'application/json'
        }
    };

    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
            return;
        }
        
        return await response.json();
    } catch (error) {
        console.error('Error fetching Data data:', error);
        throw error;
    }

}