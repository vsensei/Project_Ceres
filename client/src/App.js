import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomePage from 'pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <header className="App-header" />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
