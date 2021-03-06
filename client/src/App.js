import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { ExerciseList } from './components/ExerciseList';
import { EditExercise } from './components/EditExercise';
import { CreateExercise } from './components/CreateExercise';
import { CreateUser } from './components/CreateUser';
import { Navbar } from './components/Navbar';


function App() {
  return (
    <Router>
      <div className="container">
        <Navbar>
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
        </Navbar>
      </div>
    </Router>
  );
}

export default App;
