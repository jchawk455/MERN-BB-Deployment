import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Main from './views/Main';
import {Switch, Route, Link} from "react-router-dom";
import CreatePet from './views/CreatePet';
import OnePet from './views/OnePet';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="App">
      <h1>Pet Shelter</h1>
      <div className='w-25 d-flex justify-content-center mx-auto'>
        <nav className="navbar navbar-expand-lg bg-light">
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              <Link className="nav-link" to="createPet">Add a Pet to the Shelter</Link>
            </div>
          </div>
        </nav>
      </div>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/createPet">
          <CreatePet />
        </Route>

        <Route exact path="/pets/:_id">
          <OnePet />
        </Route>

        <Route exact path="/pets/:_id/editPet">
          <EditPet />
        </Route>


      </Switch>
    </div>
  );
}

export default App;
