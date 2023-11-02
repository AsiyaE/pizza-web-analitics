import {Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';
import FullPizza from './pages/FullPizza';
import NotFound from './pages/NotFound';

import './scss/app.scss';
import MainLayout from './layouts/MainLayout';
import Task from "./pages/Task";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Task/>}/>
            <Route path='/' element={<MainLayout/>}>
                <Route path="/home" element={<Home/>}/>
                <Route path="/cart" element={<Cart/>}/>
                <Route path="/pizza/:id" element={<FullPizza/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Route>
        </Routes>
    );
}

export default App;
