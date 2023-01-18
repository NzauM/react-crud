import logo from './logo.svg';
import './App.css';
import Displaylistings from './Displaylistings';
import ListingForm from './Listingform';
// import { Route, Routes } from 'react-router-dom';

// see all listings => fetch data, set to state, render listings from state
// Add a listing and see it on homepage => ListingForm Component
// Search a listing through description
// Post listing to db

function App() {
  return (
   <>
   {/* <Routes>
      <Route path='/listings' element={<Displaylistings/>}/>
   </Routes> */}
   <Displaylistings/>
   
   </>
  );
}

export default App;
