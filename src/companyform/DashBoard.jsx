import "../companyform/DashBoard.scss"
import { RxDashboard } from "react-icons/rx";
import { BsFillBriefcaseFill, BsFillPersonPlusFill} from "react-icons/bs";
import { AiFillSetting } from "react-icons/ai";
import { VscGraph } from "react-icons/vsc";
import { useState } from "react";
import HomeDashboard from "./HomeDashBoard";
import AddEmp from "./AddEmp"
import AddProject from "./AddProject.jsx"
  
  
export default function DashBoard(){
    const [state, setstate] = useState('dash');
    const [active, setactive] = useState(1);

    return (<>
        <div className="main_DashBoard">
                <div className="sideBar">
                    <div className="logo">
                        CorpoShare
                    </div>
                    <div className="menu">
                    <ul>
                        <li onClick={e=>{setactive(1); setstate("dash")}} className={active === 1 ? "active" : ""}><RxDashboard className="icon"/> DashBoard</li>
                        <li onClick={e=>{setactive(2); setstate("project")}} className={active === 2 ? "active" : ""}><BsFillBriefcaseFill className="icon" /> Project</li>
                        <li onClick={e=>{setactive(3); setstate("sales")}} className={active === 3 ? "active" : ""}> <VscGraph className="icon" /> Sales</li>
                        <li onClick={e=>{setactive(4); setstate("staff")}} className={active === 4 ? "active" : ""}> <BsFillPersonPlusFill className="icon" /> Add Staff</li>
                        <li onClick={e=>{setactive(6); setstate("icon")}} className={active === 5 ? "active" : ""}> <AiFillSetting className="icon" /> Settings</li>
                    </ul>
                </div>
                </div>
                <div className="main_comp">
                <div className="main_comp_wrapper">
                    {state ==="dash" ?
                     <HomeDashboard />
                    
                    : state==="staff" ? 
                   <AddEmp /> : state==="project" ?
                <AddProject /> 
                    : ""}
                
                 
                    </div>
                </div>
        </div>

    </>)
}