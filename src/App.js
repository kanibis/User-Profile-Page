import './App.css';
import NavigationList from './NavigationList';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserDetails from './user-dashboard/UserDetails';
import CompanyDetails from './user-dashboard/CompanyDetails';
import CreditCardDetails from './user-dashboard/CreditCardDetails';
import PreviousProductDetails from './user-dashboard/PreviousProductDetails';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <div className='user-wrapper'>
            <div className='navigation-container'>
              <NavigationList />
            </div>
            <div className='user-info-container'>
                <Routes>
                  <Route exact path="/" element={<UserDetails/>}/>
                  <Route path="/company-details" element={<CompanyDetails/>} />
                  <Route path="/credit-card-details" element={<CreditCardDetails/>} />
                  <Route path="/previous-product-details" element={<PreviousProductDetails/>} />
                </Routes>
            </div>
          </div>
        </div>
      </Router>
    </>
    
  );
}

export default App;
