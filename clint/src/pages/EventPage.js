import {useParams} from 'react-router-dom'
const EventPage = () => {
   const {id} = useParams(); 
    return (<h1 className="hp">Page for event № {id} </h1>);
  }
  
  export default EventPage