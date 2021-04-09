import { Switch, Route, Link } from "react-router-dom"
import Tempo from './pages/Tempo'
import Okezone from './pages/Okezone'

const App = () => {
  return (
    <>
      <div className="container">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/tempo">Tempo</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/okezone">Okezone</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/tempo">Tempo</Link></li>
            <li><Link to="/okezone">Okezone</Link></li>
          </ul>
        </nav>
        <hr/> */}
        <Switch>
          <Route exact path="/">
            <h2 className="text-center mt-3">Ini Home</h2>
          </Route>
          <Route path="/tempo"><Tempo/></Route>
          <Route path="/okezone"><Okezone/></Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
