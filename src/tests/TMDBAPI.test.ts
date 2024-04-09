import fetch from 'node-fetch';
import TMDBAPI from '..'

jest.mock('node-fetch');

describe('TMDBAPI', () => {
  const apiKey = 'test-api-key';
  let tmdbApi: TMDBAPI;

  beforeEach(() => {
    tmdbApi = new TMDBAPI(apiKey);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('searchMovies', () => {
    it('should search movies successfully', async () => {
      const query = 'test';
      const responseData = { results: [{ id: 1, title: 'Test Movie' }] };
      const response = { ok: true, json: () => Promise.resolve(responseData) };
      (fetch as jest.Mock).mockResolvedValueOnce(response);

      const result = await tmdbApi.searchMovies(query);

      expect(fetch).toHaveBeenCalledWith(expect.stringContaining(query), expect.any(Object));
      expect(result).toEqual(responseData);
    });

    it('should throw an error if search fails', async () => {
      const query = 'test';
      const response = { ok: false };
      (fetch as jest.Mock).mockResolvedValueOnce(response);

      await expect(tmdbApi.searchMovies(query)).rejects.toThrow('Failed to search movies');
    });
  });

  // Similar tests for other methods (getMovieDetails, getMovieCredits, getMovieRecommendations, getPopularMovies)
});
