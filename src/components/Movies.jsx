import React, { useState, useEffect } from "react";
import styled from "styled-components";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          "https://itunes.apple.com/us/rss/topmovies/limit=100/json"
        );
        const data = await response.json();
        setMovies(data.feed.entry);
      } catch (error) {
        console.error("Błąd pobierania danych:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <Container>
      <h4>Rekomendowane Dla Ciebie</h4>
      <Content>
        {movies.map((movie) => {
          const imageSrc = movie["im:image"]?.[2]?.label;

          return (
            imageSrc && (
              <Wrap key={movie.id.label}>
                <img src={imageSrc} alt={movie.title.label} />
              </Wrap>
            )
          );
        })}
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  cursor: pointer;
  overflow: hidden;
  position: relative;
  transition: all 0.25s ease-in-out;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 72%) 0px 30px 22px -10px;
  }
`;
