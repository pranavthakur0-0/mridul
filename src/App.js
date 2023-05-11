
import './App.css';
import LoginKaran from './companyform/LoginPage';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from './companyform/register';
import Company from "./companyform/company.jsx"
import Companyform from './companyform/CompnayFrom';
import CompanyGet from './companyform/CompanyGet.jsx';
import CompanyPost from './companyform/CompanyPost.jsx';
import GetSingleCompany from './companyform/GetSingleCompany'
import GetCompanyProject from './companyform/GetCompanyProject.jsx'
import AddCompanyProject from './companyform/AddCompanyProject.jsx'
import DashBoard  from "./companyform/DashBoard.jsx"
import AddEmp from "./companyform/AddEmp.jsx"

function App() {
  return (
   <>
        
        <Router>
      <Routes>
        <Route exact path="/" element={<LoginKaran />}> </Route>
        <Route exact path="/hello" element={<Register />}> </Route>
        <Route exact path='/register' element={<Company />}> </Route>
        <Route exact path='/company' element={<Companyform />}> </Route>
        <Route exact path='/company_get' element={<CompanyGet />}></Route>
        <Route exact path='/company_post' element={<CompanyPost />}></Route>
        <Route exact path='/company_single' element={<GetSingleCompany />}></Route>
        <Route exact path='/company_project' element={<GetCompanyProject />}></Route>
        <Route exact path='/company_projectadd' element={<AddCompanyProject />}></Route>
        <Route exact path='/admin_dashBoard' element={<DashBoard />}></Route>
      </Routes>
   </Router>
   </>
  );
}

export default App;

