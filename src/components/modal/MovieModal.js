import React from 'react';
import { Dialog, DialogTitle, DialogContent, DialogDescription, DialogFooter, DialogHeader } from '../ui/dialog';


const MovieModal = ({ movie, isOpen, onClose, genres }) => {
    if (!movie) return null;


    const genreNames = movie.genre_ids
        ? movie.genre_ids.map(genreId => {
            const genre = genres.find(g => g.id === genreId);
            return genre ? genre.name : 'Unknown';
        }).join(', ')
        : 'No category available';

        return (
            <Dialog open={isOpen} onOpenChange={onClose}>
                <DialogContent className="max-w-md mx-auto bg-opacity-80 rounded-xl shadow-lg">
                    <DialogHeader>
                        <DialogTitle>{movie.title}</DialogTitle>
                    </DialogHeader>
                    <DialogDescription>
                        <div className="bg-white bg-opacity-80 rounded-lg p-4">
                            <img
                                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                alt={movie.title}
                                className="w-48 mx-auto mb-4 rounded-lg shadow-md"
                            />
                            <div className="mb-2">
                                <strong>Release Date:</strong> {movie.release_date}
                            </div>
                            <div className="mb-2">
                                <strong>Category:</strong> {genreNames}
                            </div>
                            <div className="mb-4">
                                <strong>Overview:</strong> {movie.overview}
                            </div>
                            <div className="mb-2">
                                <strong>Popularity:</strong> {movie.popularity}
                            </div>
                            <div className="mb-2">
                                <strong>Vote Average:</strong> {movie.vote_average}
                            </div>
                            <div className="mb-2">
                                <strong>Vote Count:</strong> {movie.vote_count}
                            </div>
                        </div>
                    </DialogDescription>
                    <DialogFooter>
                        <button onClick={onClose} className="btn-primary">
                            Close
                        </button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        );
    };
    
    export default MovieModal;