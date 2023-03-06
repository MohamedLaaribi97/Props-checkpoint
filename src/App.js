import "./App.css";
import Adress from "./component/profil/Address";
import Fullname from "./component/profil/FullName";
import Profilepic from "./component/profil/ProfilePhoto";
import Mform from "./myform";

function App() {
  return (
    <div className="App">
      <Profilepic />
      <div>
        <Fullname />
      </div>
      <div>
        <Adress />
      </div>
      <Mform />
    </div>
  );
}
export default App;
