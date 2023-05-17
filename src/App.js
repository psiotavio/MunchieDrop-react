import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import AboutUs from './pages/AboutUs/AboutUs'
import Restaurants from './pages/Restaurants/Restaurants';
import Categories from './pages/Categories/Categories';
import Hamburger from './pages/Categories/Categ/Hamburger';
import './global.css';



function App()
{
 return (
    <Router>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/aboutus' element={<AboutUs />}/>
            <Route path='/restaurants' element={<Restaurants />}/>
            <Route path='/categories' element={<Categories />}/>
            <Route path='/hamburger' element={<Hamburger />}/>

        </Routes>
    </Router>
 );
}

export default App;