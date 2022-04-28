import { useState } from 'react';

import { SideBar, GenreResponseProps } from './components/SideBar';
import { Content, MovieProps } from './components/Content';
import { Header } from './components/Header';

import './styles/global.scss';

export function App() {
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar setSelectedGenre={setSelectedGenre} setMovies={setMovies} />

      <div className="container">
        <Header title={selectedGenre.title} />

        <Content movies={movies} />
      </div>
    </div>
  )
}