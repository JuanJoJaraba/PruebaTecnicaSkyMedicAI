import { useState, useEffect } from 'react';
import { useServerMovies, useServerCategories, useServerLanguages, fetchMovieDetails } from './useServerHooks';

export const useClientMovies = (selectedLanguage, initialMovies = [], initialCategories = [], initialLanguages = []) => {
    const [movies, setMovies] = useState(initialMovies);
    const [categories, setCategories] = useState(initialCategories);
    const [languages, setLanguages] = useState(initialLanguages);
    const [page, setPage] = useState(1);
    const [movieDetails, setMovieDetails] = useState(null);

    const fetchMovies = async () => {
        console.log('Fetching movies for language:', selectedLanguage); // Debugging line
        const fetchedMovies = await useServerMovies(selectedLanguage, page);
        console.log('Fetched Movies:', fetchedMovies); // Debugging line
        setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
    };
    
    useEffect(() => {
        const fetchData = async () => {
            const fetchedCategories = await useServerCategories();
            const fetchedLanguages = await useServerLanguages();
            setCategories(fetchedCategories);
            setLanguages(fetchedLanguages);
        };

        if (initialCategories.length === 0 || initialLanguages.length === 0) {
            fetchData();
        }
    }, [initialCategories.length, initialLanguages.length]);

    useEffect(() => {
        fetchMovies();
    }, [page, selectedLanguage]); 

    const loadMoreMovies = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const resetMovies = () => {
        setPage(1);
        setMovies([]);
    };

    const loadMovieDetails = async (movieId) => {
        const details = await fetchMovieDetails(movieId);
        setMovieDetails(details);
    };

    return { movies, categories, languages, movieDetails, loadMoreMovies, loadMovieDetails, resetMovies };
};