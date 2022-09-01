import { Component } from "react";
import Home from './components/home';
import About from './components/about';
import {BrowserRouter as Router , Routes , Route , Navigate} from 'react-router-dom';
import Header from "./components/header";
import Movie from "./components/movie";
import './App.css';
import Favourite from "./components/favourites";
import Weather from './components/weather';
import Login from "./components/login";

class App extends Component{
   render(){
       return (
        <>
        <Header />
        <div className='container mt-5'>
        <Router>
        <Routes>
            {/* <Route path="/home" element={<Home />}/> */}
            <Route path="/home" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home name="Charles"/>}/>
            <Route path="/about" element={<About />}/>
            <Route path="/movieslist" element={<Movie />}/>
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/login" element={<Login />} />

        </Routes>
    </Router>
        </div>
        </>
       )
   }
}

export default App;