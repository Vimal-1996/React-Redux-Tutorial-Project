import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'  
import Header from './containers/Header';
import ProductListing from './containers/ProductListing'
import ProductDetail from './containers/ProductDetail';
import ProductComponent from './containers/ProductComponent'
import PageNotFound from './containers/PageNotFound';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Header/>}/>
          <Route exact path="/list" element={<ProductListing/>}/>
          <Route exact path="/comp" element={<ProductComponent/>}/>
          <Route exact path="/detail/:id" element={<ProductDetail/>}/>
          <Route path="*" element={<PageNotFound/>}/>
        </Routes>
        
      </Router>
      
    </div>
  );
}

export default App;
