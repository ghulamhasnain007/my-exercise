import logo from './logo.svg';
import './App.css';
import Rander from './LabOne/Rander/Rander';
import KeyApp from './KeyDemo/KeyApp';
import Form from './Form/Form';
import Feedback from './Feedback/Feedback';
import SignUp from './SignUp/SignUp';


function App() {
  const handleSubmit = () => {
    console.log("Form Submitted!")
  }
  return (   
   
    //  <SignUp/>
    <Feedback onSubmit={handleSubmit}/>
  );
}

export default App;
