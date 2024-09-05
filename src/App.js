import logo from './logo.svg';
import './App.css';
import Login from './component/login/Login';
import ChooseLogin from './component/login/ChooseLogin';

function App() {
  return (
    <div className="App">
      {/* <Login/> */}
      <ChooseLogin />
    </div>
  );
}

export default App;
