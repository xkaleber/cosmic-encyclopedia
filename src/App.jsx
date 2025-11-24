import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar.jsx'
import ContentPage from './pages/ContentPage.jsx'
import NavigateBackButton from './components/NavigateBackButton.jsx'
import HomePage from './pages/HomePage.jsx'

import './App.css'

function App() {
  const data = [
    {
      id: 'stars',
      title: 'Stars',
      content: 'Stars are luminous spheres of plasma held together by gravity. They are the fundamental building blocks of galaxies and play a crucial role in the universe.'
    },
    {
      id: 'planets',
      title: 'Planets',
      content: 'Planets are celestial bodies that orbit stars. They can be rocky, gaseous, or icy, and they vary greatly in size, composition, and atmosphere.'
    },
    {
      id: 'comets',
      title: 'Comets',
      content: 'Comets are icy bodies that release gas or dust. They are often characterized by their spectacular tails that develop when they approach the sun.'
    },
    {
      id: 'galaxies',
      title: 'Galaxies',
      content: 'Galaxies are massive systems of stars, stellar remnants, interstellar gas, dust, and dark matter, bound together by gravity. They come in various shapes and sizes.'
    }
  ];

return (
    <div className = "main-container">
      <BrowserRouter>
        <NavBar data={data} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          
          {data.map(dataElement => (
            <Route 
              key={dataElement.id}
              path={`/${dataElement.id}`}
              element={<ContentPage data={dataElement} />}
            />
          ))}
        </Routes>

        <NavigateBackButton />
      </BrowserRouter>
    </div>
  )
}

export default App
