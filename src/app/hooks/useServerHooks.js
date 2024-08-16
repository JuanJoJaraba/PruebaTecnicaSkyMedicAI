export const useServerMovies = async (language = 'en', page = 1) => {
    try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?language=${language}&page=${page}`, {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcxYzQ0MzMxY2NlYjQzODZmOGE3MTE0NzhlNGYyYyIsIm5iZiI6MTcyMzc2MDQ3NS4zOTcxNzgsInN1YiI6IjY2YmU3Y2ZmOWU0N2I1ZjM4Zjk3OWIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UAZk2X_LjwUm_YSWNF_UypdoR8NR8ybWIVSbhuE2kn8'
            }
        });

        const data = await response.json();
        return data.results;
    } catch (error) {
        console.error('Error fetching movies:', error);
        return [];
    }
};

export const useServerCategories = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/genre/movie/list', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcxYzQ0MzMxY2NlYjQzODZmOGE3MTE0NzhlNGYyYyIsIm5iZiI6MTcyMzc2MDQ3NS4zOTcxNzgsInN1YiI6IjY2YmU3Y2ZmOWU0N2I1ZjM4Zjk3OWIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UAZk2X_LjwUm_YSWNF_UypdoR8NR8ybWIVSbhuE2kn8'
            }
        });

        const data = await response.json();
        return data.genres;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
};

export const useServerLanguages = async () => {
    try {
        const response = await fetch('https://api.themoviedb.org/3/configuration/languages', {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcxYzQ0MzMxY2NlYjQzODZmOGE3MTE0NzhlNGYyYyIsIm5iZiI6MTcyMzc2MDQ3NS4zOTcxNzgsInN1YiI6IjY2YmU3Y2ZmOWU0N2I1ZjM4Zjk3OWIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UAZk2X_LjwUm_YSWNF_UypdoR8NR8ybWIVSbhuE2kn8'
            }
        });

        const data = await response.json();
        const filteredLanguages = data.filter(lang => lang.iso_639_1 === 'en' || lang.iso_639_1 === 'es');
        return filteredLanguages;
    } catch (error) {
        console.error('Error fetching languages:', error);
        return [];
    }
};

export async function fetchMovieDetails(movieId) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?append_to_response=credits`, {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYTcxYzQ0MzMxY2NlYjQzODZmOGE3MTE0NzhlNGYyYyIsIm5iZiI6MTcyMzc2MDQ3NS4zOTcxNzgsInN1YiI6IjY2YmU3Y2ZmOWU0N2I1ZjM4Zjk3OWIzNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UAZk2X_LjwUm_YSWNF_UypdoR8NR8ybWIVSbhuE2kn8'
        }
    });

    const data = await response.json();
    return data;
}

