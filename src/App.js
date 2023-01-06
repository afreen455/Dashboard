import './App.css';
import StaticInfo from './components/StaticInfo';
import Announcement from './components/Announcement';
import Poc from './components/Poc';
import Nav from './components/Nav';
import {Routes,Route} from 'react-router-dom'
import SideNav from './components/SideNav';
import GroupEmail from './components/GroupEmail';

function App() {
  return (
    <div className="App">
      {/* <h1 className='email'> GroupEmail</h1> */}
      <br></br>
      <Nav/>
      
      <div className='center'>
      <SideNav/>
      <Routes>
        <Route path="/" element={<StaticInfo/>}/>
        <Route path="/announcement" element={<Announcement/>}/>
        <Route path="/poc" element={<Poc/>}/>
        <Route path="/groupemail" element={<GroupEmail/>}/>
      </Routes>
      </div>    
    </div>
  );
}

export default App;
