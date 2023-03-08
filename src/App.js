import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Adress from "./component/profil/Address";
import Fullname from "./component/profil/FullName";
import Profilepic from "./component/profil/ProfilePhoto";
import Mform from "./myform";
import TextLinkExample from "./mynavbar";

function App() {
  return (
    <>
 
      <TextLinkExample/>
   
    <div className="App">
      <Profilepic />
      <div>
        <Fullname />
      </div>
      <div>
        <Adress />
      </div>
      <div>
      <Mform />
      </div>
    </div>
    </>
  );
}
export default App;
