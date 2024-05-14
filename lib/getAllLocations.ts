export async function toGetAll(){
    
    const url = 'https://demandapi.booking.com/3.1/';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ca00eaa66cmshf9a8f2d64e38074p17bd0ejsn9c54345e7e16',
            'X-RapidAPI-Host': 'booking-com15.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

toGetAll()