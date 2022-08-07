import { Link } from "react-router-dom";
const NotFound = () =>  {
      return (<div>
                <h1 className="hp">Страница не найдена</h1>
                <Link to="/">Домой</Link>
            </div>);
}

  export default NotFound
