import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from 'components/header/header.component';
import HomePage from 'pages/homepage/homepage.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
