'use client';

import { useState, useEffect } from 'react';
import { Select, SelectItem, SelectTrigger, SelectValue, SelectContent, SelectGroup } from './ui/select';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from './ui/card';
import SearchBar from './SearchBar';
import { useClientMovies } from '@/app/hooks/useClientHooks';
import MovieModal from './modal/MovieModal';

export default function MovieList({ initialMovies = [], initialCategories = [], initialLanguages = [] }) {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState('en');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedMovie, setSelectedMovie] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);

    const { movies, categories, languages, loadMoreMovies, loadMovieDetails, resetMovies } = useClientMovies(
        selectedLanguage, 
        initialMovies, 
        initialCategories, 
        initialLanguages
    );

    useEffect(() => {
        const handleScroll = () => {
            const bottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight;
            if (bottom) {
                loadMoreMovies();
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [loadMoreMovies]);

    const filteredMovies = movies.filter(movie => {
        return (
            (!selectedCategory || selectedCategory === 'all' || movie.genre_ids.includes(parseInt(selectedCategory))) &&
            (!searchTerm || movie.title.toLowerCase().includes(searchTerm.toLowerCase()))
        );
    });

    const truncateText = (text, wordLimit) => {
        const words = text.split(' ');
        if (words.length <= wordLimit) return text;
        return words.slice(0, wordLimit).join(' ') + '...';
    };

    const handleCardClick = (movie) => {
        setSelectedMovie(movie);
        setModalOpen(true);
        loadMovieDetails(movie.id); 
    };

    const closeModal = () => {
        setModalOpen(false);
    };

    const handleLanguageChange = (value) => {
        setSelectedLanguage(value);
        resetMovies();
    };

    return (
        <div className="w-full">
            <div className="w-3/4 mb-4">
                <SearchBar
                    searchTerm={searchTerm}
                    onSearchChange={setSearchTerm}
                    onSearchSubmit={() => {}}
                />
            </div>

            <div className="mb-8 flex justify-between">
                <Select value={selectedCategory} onValueChange={(value) => setSelectedCategory(value)} className="w-1/3">
                    <SelectTrigger className="w-30">
                        <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectGroup>
                            <SelectItem value="all">All Categories</SelectItem>
                            {categories.length > 0 ? (
                                categories.map(category => (
                                    <SelectItem key={category.id} value={category.id}>
                                        {category.name}
                                    </SelectItem>
                                ))
                            ) : (
                                <SelectItem disabled>Loading categories...</SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                <Select value={selectedLanguage} onValueChange={handleLanguageChange} className="w-1/3">
                    <SelectTrigger className="w-30">
                        <SelectValue placeholder="Select Language" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                        <SelectGroup>
                            {languages.length > 0 ? (
                                languages.map(language => (
                                    <SelectItem key={language.iso_639_1} value={language.iso_639_1}>
                                        {language.english_name}
                                    </SelectItem>
                                ))
                            ) : (
                                <SelectItem disabled>Loading languages...</SelectItem>
                            )}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {filteredMovies.map((movie, index) => (
                    <Card key={`${movie.id}-${index}`} className="rounded-lg shadow-lg bg-gray-800 text-white" onClick={() => handleCardClick(movie)}>
                        <CardHeader>
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="rounded mb-4"
                            />
                            <CardTitle className="text-xl font-bold text-red-600">{movie.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">{truncateText(movie.overview, 35)}</p>
                        </CardContent>
                        <CardFooter className="text-blue-400">
                            <span>Release Date: {movie.release_date}</span>
                        </CardFooter>
                    </Card>
                ))}
            </div>

            {selectedMovie && (
                <MovieModal
                    movie={selectedMovie}
                    isOpen={modalOpen}
                    onClose={closeModal}
                    genres={categories}
                    languages={languages}
                />
            )}
        </div>
    );
}
export async function getServerSideProps() {
    const initialMovies = await useServerMovies('en', 1);
    const initialCategories = await useServerCategories();
    const initialLanguages = await useServerLanguages();

    return {
        props: {
            initialMovies,
            initialCategories,
            initialLanguages,
        },
    };
}
