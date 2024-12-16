import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Assignments from "../pages/assignments";
import Navbar from "../components/Navbar"
import TaskForm from "../pages/addInformation";


const Root =()=>{
          return <div>
                  <BrowserRouter>
                        <Routes>
                              <Route element={<Navbar/>}>
                                    <Route path="/" element={<TaskForm/>}></Route>    
                                    <Route path="/assignments" element={<Assignments/>}></Route>  
                              </Route>
                                
                        </Routes>
                  </BrowserRouter>
          </div>
}

export default Root