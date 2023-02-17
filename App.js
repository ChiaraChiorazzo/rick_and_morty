import './App.css'
import Cards from './components/cards/Cards.jsx'
import Nav from "./components/nav/Nav.jsx"
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from "react-router-dom"
import About from './components/about/About'
import Detail from "./components/detail.jsx/Detail"
import Form from './components/form/Form'
import { useLocation } from 'react-router-dom'
import Favorites from "./components/favorites/Favorites"
function App() {

  const [characters, setCharacters] = useState([])
  const location = useLocation()
  const navigate = useNavigate();
  const [access, setAccess] = useState(false)
  const username = "mail_mail@hotmail.com"
  const password = "Pass1234"


  const onSearch = (character) => {

    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert('No hay personajes con ese ID');
        }
      });
  }
  const onClose = (id) => {
    setCharacters(characters.filter(character => character.id !== id))

  }

  function Login(userData) {
    if (userData.password === password && userData.username === username) {
      setAccess(true);
      navigate("/home")
    }
  }
  useEffect(() => {
    !access && navigate("/");
  }, [access])

   const logOut = ()=> {
    setAccess(false)
    navigate ("/")
   }

  return (

    <div className='App' style={{ padding: '25px' }}>
      {location.pathname !== "/" && <Nav logOut= {logOut} onSearch={onSearch} />}


      {/* Configuracion de rutas */}
      <Routes>
        <Route path='/favorites' element= {<Favorites/>} />
        <Route path='/' element={<Form login= {Login}/>} />
        <Route path='/home' element={<Cards onClose={onClose}
          characters={characters} />} />
        <Route path='/about' element={<About />} />
        <Route path='/detail/:detailId' element={<Detail />} />
      </Routes>
    </div>

  )
}

export default App


