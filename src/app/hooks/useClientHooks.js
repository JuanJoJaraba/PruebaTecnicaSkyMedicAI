import { useState, useEffect } from 'react';
import { useServerMovies, useServerCategories, useServerLanguages, fetchMovieDetails } from './useServerHooks';

export const useClientMovies = (selectedLanguage, initialMovies = [], initialCategories = [], initialLanguages = []) => {
    const [movies, setMovies] = useState(initialMovies);
    const [categories, setCategories] = useState(initialCategories || []);
    const [languages, setLanguages] = useState(initialLanguages || []);
    const [page, setPage] = useState(1);
    const [movieDetails, setMovieDetails] = useState(null);

    const fetchMovies = async () => {
        const fetchedMovies = await useServerMovies(selectedLanguage, page);
        setMovies((prevMovies) => [...prevMovies, ...fetchedMovies]);
    };

    useEffect(() => {
        if (initialCategories.length === 0 || initialLanguages.length === 0) {
            const fetchData = async () => {
                const fetchedCategories = await useServerCategories();
                const fetchedLanguages = await useServerLanguages();
                setCategories(fetchedCategories || []);
                setLanguages(fetchedLanguages || []);
            };
            fetchData();
        }
    }, [initialCategories, initialLanguages]);

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