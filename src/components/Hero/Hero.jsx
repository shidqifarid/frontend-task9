import { useEffect, useState } from "react";
import {
  Container,
  HeroSection,
  HeroLeft,
  HeroTitle,
  HeroGenre,
  HeroDescription,
  HeroButton,
  HeroImage,
} from "./Hero.styled";

function Hero() {
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        "https://www.omdbapi.com/?apikey=fcf50ae6&i=tt2975590"
      );

      const data = await response.json();
      setMovie(data);
    }

    fetchMovie();
  }, []);

  return (
    <Container>
      <HeroSection>
        <HeroLeft>
          <HeroTitle>{movie.Title}</HeroTitle>
          <HeroGenre>Genre: {movie.Genre}</HeroGenre>
          <HeroDescription>{movie.Plot}</HeroDescription>
          <HeroButton>Watch</HeroButton>
        </HeroLeft>
        <div>
          <HeroImage src={movie.Poster} alt={movie.Title} />
        </div>
      </HeroSection>
    </Container>
  );
}

export default Hero;
