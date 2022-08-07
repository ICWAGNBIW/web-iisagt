//import logo from './logo.svg';
//import './App.css';
import {Routes, Route} from 'react-router-dom';
import {useContext, useEffect, useState} from 'react';
import {Context} from './index';
import axios from 'axios';
import {getEvents} from './http/eventsAPI';
import {Button} from 'react-bootstrap';

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
  const [data, setData] = useState([]);
  /*const getData = async () => {
    const events = await getEvents();
    console.log(events);  
  }*/
  
const  getData = () => {
    axios.get('http://localhost:5000/api/user/all').then(res =>{
      const data = res.data;
      console.log(data);
      let parsed_data =[];
      for (let d in data) {
        console.log(data[d]);
        let single = data[d];
        console.log(single.email);
        //let parsed = JSON.parse(data[d]);
        //parsed_data.push(parsed);
      }
      
      //setData(par)
    })
  }
  return (
    <div>HEY!!!!
      <Button onClick={() => {getData()}}>get data</Button>
      {data && <p>{data}</p>}
    </div>
  )
}


function AdminHey () {
  return (
    <div>HEY BUT FOR ADMIN C:</div>
  )
}

export default App;
