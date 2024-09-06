import logo from './logo.svg';
import './App.css';
import Login from './component/login/Login';
import ChooseLogin from './component/login/ChooseLogin';
import UserLogin from './component/login/UserLogin';
import SignUp from './component/login/SignUp';

function App() {
  return (
    <div className="App">
      {/* <UserLogin/> */}
      {/* <Login/> */}
      {/* <ChooseLogin /> */}
      <SignUp/>
    </div>
  );
}

export default App;
