import * as config from './config.js';

export const getFeriados = async (ddd) => {

    const url = `${config.url_api()}/ddd/v1/${ddd}`;
    const options = {
        method: 'GET',
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
        console.error('Error fetching holiday data:', error);
        throw error;
    }
}