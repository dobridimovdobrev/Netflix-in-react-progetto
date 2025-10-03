const apiKey = 'ffd9d38e';

export async function getMoviesBySearch(search) {
    try {
        // Aggiungiamo il parametro page=1 per ottenere la prima pagina di risultati
        const res = await fetch(`https://www.omdbapi.com/?s=${search}&page=1&apikey=${apiKey}`);
        const result = await res.json();
        
        if(res.ok && result.Response === "True"){
            // Se abbiamo meno di 10 risultati, proviamo a ottenere più film con una ricerca più ampia
            if (result.Search && result.Search.length < 10) {
                try {
                    // Proviamo con una ricerca più generica
                    const res2 = await fetch(`https://www.omdbapi.com/?s=${search.split(' ')[0]}&page=1&apikey=${apiKey}`);
                    const result2 = await res2.json();
                    
                    if (res2.ok && result2.Response === "True" && result2.Search) {
                        // Combiniamo i risultati
                        result.Search = [...result.Search, ...result2.Search];
                    }
                } catch (innerError) {
                    console.log("Errore nella seconda ricerca:", innerError);
                }
            }
            return result; 
        } else {
            throw new Error(result.Error || "Mi dispiace non possiamo visualizzare i film");     
        }
    } catch (error) {
        console.log(error);
        return { Response: "False", Error: error.message };
    }
}



