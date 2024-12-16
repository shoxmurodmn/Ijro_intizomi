import { useState } from "react";


import Dropdowns from "../dropdown";
import "./stayle.css";
import User from "../user";
import Logo from "../../asets/imges/cropped-MRDI.png";
import { Outlet , NavLink} from "react-router-dom";

const Navbar = () => {

      const [active, setActive] = useState(true)
      const [active2, setActive2] = useState(false)

      
  return<div>
            <div className="wrapper FlexGC">
                  <div className="box FlexGC">
                  <div className="nvabar_taps FlexGC">
                  <div className="logo d-flex gap-2 logo_box">
                        <img src={Logo} alt="" />
                        <div className="logo_name">
                              <span
                              style={{
                                    fontWeight: "600",
                              }}
                              >
                        
                              Kamoliddin Behzod
                              </span>
                              <br />
                              <span>nomidagi Milliy rassomlik va dizayn instituti</span>
                        </div>
                  </div>

                  {/*---- navbar list---- */}
                  <div  className="nav_list FlexGC">
                        <NavLink onClick={()=> {setActive(true); setActive2(false) }} to="/"
                        className={({ isActive }) =>{
                             if (isActive) {
                              setActive(true); setActive2(false)
                             }
                             return isActive ? "nav_list_item flexVC active-link" : "nav_list_item flexVC"
                         } }
                        >
                              <span style={{ marginRight: "4px" }}>
                                    <svg
                                          viewBox="0 0 24 24"
                                          fit=""
                                          height="24px"
                                          width="24px"
                                          preserveAspectRatio="xMidYMid meet"
                                          focusable="false"
                                    >
                                          <rect fill="none" height="24" width="24"></rect>
                                          <path fill={active ? "#4f46e5": "#4F4F4F"}  d="M22,5.18L10.59,16.6l-4.24-4.24l1.41-1.41l2.83,2.83l10-10L22,5.18z M12,20c-4.41,0-8-3.59-8-8s3.59-8,8-8 c1.57,0,3.04,0.46,4.28,1.25l1.45-1.45C16.1,2.67,14.13,2,12,2C6.48,2,2,6.48,2,12s4.48,10,10,10c1.73,0,3.36-0.44,4.78-1.22 l-1.5-1.5C14.28,19.74,13.17,20,12,20z M19,15h-3v2h3v3h2v-3h3v-2h-3v-3h-2V15z"></path>
                                    </svg>
                              </span>
                        <span> Topshiriq yaratish</span>
                        </NavLink>

                        <NavLink  onClick={()=> {setActive(false); setActive2(true) }} to="assignments" 
                              
                              className={({ isActive }) =>{ 
                                    if (isActive) {
                                          setActive(false); setActive2(true)
                                         }
                                 return   isActive ? "nav_list_item flexVC active-link" : "nav_list_item flexVC"}
                                  }
                        >
                              <span style={{ marginRight: "4px" }}>
                              <svg
                                    viewBox="0 0 24 24"
                                    fit=""
                                    height="24px"
                                    width="24px"
                                    preserveAspectRatio="xMidYMid meet"
                                    focusable="false"
                              >
                                    <g>
                                    <rect fill="none" height="24" width="24"></rect>
                                    </g>
                                    <g>
                                    <path  fill={active2 ? "#4f46e5": "#4F4F4F"} d="M6,10h3v10H6V10z M6,5h3v4H6V5z M16,16h3v4h-3V16z M16,13h3v2h-3V13z M11,13h3v7h-3V13z M11,9h3v3h-3V9z"></path>
                                    </g>
                              </svg>
                              </span>
                              <span>shaxsiy topshiriqlar (kelib tushgan)</span>
                        </NavLink>
                  </div>
                   {/* -----navbar list ////------ */}
                  </div>

                  <div className="navbar_sign_in FlexGC gap-4">
                  
                  <Dropdowns></Dropdowns>
                  </div>
                  </div>
            </div>
            <Outlet />
            </div>;
};
export default Navbar;
