import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './pages/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import MyItems from './pages/MyItems/MyItems';
import NotFound from './pages/NotFound/NotFound';
import Register from './pages/Register/Register';
import RequireAuth from './pages/Login/RequireAuth';
import StockUpdate from './pages/Home/InventoryItems/StockUpdate';
import ManageInventories from './pages/ManageInventories/ManageInventories';
import AddInventoryItems from './pages/AddInventoryItems/AddInventoryItems';
import Blogs from './pages/Blogs/Blogs';
import RequestedItems from './pages/RequestedItems/RequestedItems';
import RequestItem from './pages/RequestItem/RequestItem';
import PhotoGallery from './pages/PhotoGallery/PhotoGallery';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/gallery' element={<PhotoGallery></PhotoGallery>}></Route>
        <Route path='/inventory/:id' element={
          <RequireAuth>
            <StockUpdate></StockUpdate>
          </RequireAuth>
        }></Route>
        <Route path='/manageinventories' element={<ManageInventories></ManageInventories>}></Route>
        <Route path='/addinventoryitem' element={<AddInventoryItems></AddInventoryItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/requesteditems' element={<RequestedItems></RequestedItems>}></Route>
        <Route path='/requestitem' element={<RequestItem></RequestItem>}></Route>
        <Route path='/myitems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
