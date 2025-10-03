import "./App.css";
import Navigation from "./components/Navigation";
import TvShowsHeader from "./components/TvShowsHeader";
import { getMoviesBySearch } from "./api/moviesApi";
import { useState, useEffect } from "react";
import Carousel from "./components/Carousel";
import Footer from "./components/footer";

function App() {
  const [trendingMovies, importTrendingMovies] = useState([]);
  const [watchAgainMovies, importWatchAgainMovies] = useState([]);
  const [newReleasesMovies, importNewReleasesMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovies() {
      setLoading(true);

      try {
        const trendingResult = await getMoviesBySearch("batman");
        const watchAgainResult = await getMoviesBySearch("star wars");
        const newReleasesResult = await getMoviesBySearch("2023");

        if (trendingResult.Response === "True") {
          const trendingMoviesData = trendingResult.Search.slice(0, 6).map(
            (movie) => ({
              title: movie.Title,
              image:
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "./public/media/media1.jpg",
              badge: movie.Year >= 2022 ? "NEW EPISODES" : null,
            })
          );
          importTrendingMovies(trendingMoviesData);
        }

        if (watchAgainResult.Response === "True") {
          const watchAgainMoviesData = watchAgainResult.Search.slice(0, 6).map(
            (movie) => ({
              title: movie.Title,
              image:
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "./public/media/media4.jpg",
            })
          );
          importWatchAgainMovies(watchAgainMoviesData);
        }

        if (newReleasesResult.Response === "True") {
          const newReleasesMoviesData = newReleasesResult.Search.slice(
            0,
            6
          ).map((movie) => ({
            title: movie.Title,
            image:
              movie.Poster !== "N/A"
                ? movie.Poster
                : "./public/media/media9.jpg",
            badge: "NEW EPISODES",
          }));
          importNewReleasesMovies(newReleasesMoviesData);
        }
      } catch (error) {
        console.error("Errore nel caricamento dei film:", error);
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <>
      <Navigation
        logo="./public/img/netflix_logo.png"
        kids="./public/img/kids_icon.png"
        avatar="./public/img/avatar.png"
      />
      <main className="container-fluid px-5">
        <TvShowsHeader />
        {loading ? (
          <div className="text-center text-white my-5">Loading...</div>
        ) : (
          <>
            <Carousel title="Trending Now" movies={trendingMovies} />
            <Carousel title="Watch Again" movies={watchAgainMovies} />
            <Carousel title="New Releases" movies={newReleasesMovies} />
          </>
        )}
      </main>
      <Footer />
    </>
  );
}

export default App;
