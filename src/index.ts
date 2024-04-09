import { error } from "console";
import fetch from "node-fetch";

class TMDBAPI {
    apiKey: any;
    baseUrl: string;
    constructor(apiKey: string) {
        if (!apiKey) {
            throw new Error("TMDB API is required");
        }
        this.apiKey = apiKey;
        this.baseUrl = "https://api.themoviedb.org/3/";
        
    }

    async searchMovies(query: string) {
        const url = `${this.baseUrl}search/movie?api_key=${this.apiKey}&query=${encodeURIComponent(query)}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to search movies");
        }
        return await response.json();
    }
    async getMovieDetails(movieId: string) {
        const url = `${this.baseUrl}movie/${movieId}?api_key=${this.apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch movie details");
        }
        return await response.json();
    }

    async getMovieCredits(movieId: string) {
        const url = `${this.baseUrl}movie/${movieId}/credits?api_key=${this.apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch movie credits");
        }
        return await response.json();
    }
    async getMovieRecommendations(movieId: string) {
        const url = `${this.baseUrl}movie/${movieId}/recommendations?api_key=${this.apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch movie recommendations");
        }
        return await response.json();
    }

    async getPopularMovies() {
        const url = `${this.baseUrl}movie/popular?api_key=${this.apiKey}`;
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch popular movies");
        }
        return await response.json();
    }
}


export default TMDBAPI;