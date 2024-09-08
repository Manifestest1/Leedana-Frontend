import './App.css';
import Login from './component/login/Login';
import ChooseLogin from './component/login/ChooseLogin';
import UserLogin from './component/login/UserLogin';
import SignUp from './component/login/SignUp';
import PasswordReset from './component/login/PasswordReset';
import CheckEmail from './component/login/CheckEmail';
import CreatePassword from './component/login/CreatePassword';
import StepForm from './component/stepper/StepForm';
import PlanSetup from './pages/planSetup/PlanSetup';

function App() {
  return (
    <div className="App">
      {/* <UserLogin/> */}
      {/* <Login/> */}
      {/* <ChooseLogin /> */}
      {/* <SignUp/> */}
      {/* <PasswordReset /> */}
      {/* <CheckEmail /> */}
      {/* <CreatePassword /> */}
      <PlanSetup/>
    </div>
  );
}

export default App;
