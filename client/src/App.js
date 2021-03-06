import { BrowserRouter , Route } from "react-router-dom";
import { ExerciseList } from './components/ExerciseList';
import { EditExercise } from './components/EditExercise';
import { CreateExercise } from './components/CreateExercise';
import { CreateUser } from './components/CreateUser';
import { Navbar } from './components/Navbar';
import ReactDOM from 'react-dom';



function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
          <Route path="/" exact component={ExerciseList} />
          <Route path="/edit/:id"  component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
      </div>
    </BrowserRouter>
  );
}

export default App;
