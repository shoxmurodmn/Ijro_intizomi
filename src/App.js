import { useEffect } from "react";
import HomePage from "./pages/home";
import Root from "./root";
import { Modal, Ripple,Dropdown, initMDB,  Tab} from "mdb-ui-kit";





function App() {
  useEffect(() => {
    initMDB({ Modal, Ripple,Dropdown, Ripple , Tab, initMDB});
  }, []);
  return (
    <div className="App">
        <Root/>
    </div>
  );
}

export default App;
