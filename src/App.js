import './App.css';
import Fetching from './component/Fetching';
import {Switch,Route} from 'react-router-dom';
import DisplayData from './component/DisplayData';

function App() {
  return (
    <div className="App">
    <Switch>
      <Route exact path="/" component={Fetching}/>
      <Route path="/display" component={DisplayData}/>
    </Switch>
    </div>
  );
}

export default App;
