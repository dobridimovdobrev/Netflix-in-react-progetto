const apiKey = 'ffd9d38e';

export async function getMoviesBySearch(search) {
    try {
       
        const res = await fetch(`https://www.omdbapi.com/?s=${search}&page=1&apikey=${apiKey}`);
        const result = await res.json();
        
        if(res.ok){
            return result; 
        } else {
            throw new Error(result.Error || "Mi dispiace non possiamo visualizzare i film");     
        }
    } catch (error) {
        console.log(error);
        return { Response: "False", Error: error.message };
    }
}
