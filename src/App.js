import { useSelector } from 'react-redux';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import List from './components/Users/List';
import Form from './components/Form/Form';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

const App = () => {
 const edit = useSelector((state) => state.global.edit)
 const checkedUser = useSelector((state) => state.global.checkedUser);

  const getcurrentPage = () => {
    switch (edit) {
        case 'editUser':
            return <Form id={checkedUser} />;
        case 'newUser':
            return <Form id={''}/>;
        default:
            return <List />;
    }
};

  return (
    <Router>
    <div className="App">
      <Header />
        <Switch>
          <Route path={'*'}> {getcurrentPage()} </Route>
        </Switch>
      <Menu />
    </div>
    </Router>
  );
}

export default App;
