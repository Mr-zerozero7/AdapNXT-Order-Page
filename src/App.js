//  importing CSS styles
import './App.css';

//   importing React Packages
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// importing Global textContext
import {useTheme } from './ThemeContext';

// importing elements from components
import NavBar from './components/NavBar';
import Dashboard from './components/Dashboard';
import Orders from './components/Orders'
import Inventory from './components/Inventory';
import Shipping from './components/Shipping';
import Channel from './components/Channel';
import DashboardPage from './components/DashboardPage';


function App() {
  const {theme} = useTheme()
  return(
    <>
    <Router>
      <div className= {`main-container ${theme === 'darkmode' ? 'dark-mode' : 'light-mode-main-page'}`}>
        <NavBar/>
        <div className="bottom-container">
          <Dashboard/>
          <div> 
            <Routes>
              <Route exact path='/' element={<DashboardPage/>}/>
              <Route exact path='/orders' element={<Orders/>}/>
              <Route exact path='/inventory' element={<Inventory/>}/>
              <Route exact path='/shipping' element={<Shipping/>}/>
              <Route exact path='/channel' element={<Channel/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </Router>
    </>
)}

export default App;
