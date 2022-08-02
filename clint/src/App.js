//import logo from './logo.svg';
//import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useContext} from 'react';
import {Context} from './index';

function App() {
  //let isAuth = true;
  const {user} = useContext(Context);
  console.log(user);
  return (
    <div className="App">
     <Routes>
      <Route path="/hey" element={<Hey/>}/>
     {user.isAuth && <Route path="/adminhey" element={<AdminHey/>}/>}
      </Routes>
    </div>
  );
}

function Hey () {
  return (
    <div>HEY!!!!</div>
  )
}


function AdminHey () {
  return (
    <div>HEY BUT FOR ADMIN C:</div>
  )
}

export default App;
