import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyItems from './Pages/MyItems/MyItems';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import SignUp from './Pages/SignUp/SignUp';
import RequireAuth from './Pages/Login/RequireAuth/RequireAuth';
import ManageInventory from './Pages/ManageInventory/ManageInventory';
import AddItems from './Pages/AddItems/AddItems';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>

        <Route path='/manageinventory' element={
          <RequireAuth>
            <ManageInventory></ManageInventory>
          </RequireAuth>
        }></Route>

        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>

        <Route path='/additems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
