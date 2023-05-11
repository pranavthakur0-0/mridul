import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import axios from "axios";
export default function CompanyPost(){
    const [userid, setuserid] = useState();
    const [info, setinfo] = useState({
        founder: "",
        description:"",
        services_offered:"",
        logo:"",
        year_established:"",
        employees:"",
        valuation:"",
        user:""
      });

      useEffect(()=>{
        const TOKEN = Cookies.get('accesstoken');
        var decoded = jwt_decode(TOKEN);
        setuserid(decoded.user_id);
      },[])
    async function req_post(e){
        e.preventDefault();
        const TOKEN = Cookies.get('accesstoken');
        try{
            const data = await axios.post('http://3.139.87.105/api/api/companies/', {
                founder: info.founder,
                description: info.description,
                services_offered: info.services_offered,
                logo: info.logo,
                year_established: info.year_established,
                employees: info.employees,
                valuation: info.valuation,
                user: userid,
              }, {
                headers: {
                  Authorization: `Bearer ${TOKEN}`,
                  'Content-Type': 'application/json'
                }
              });
              console.log(data);              
        }
          catch(err){
            console.log(err);
          }
    }

    const handlechange = (e) => {
        setinfo((info) => ({
          ...info,
          [e.target.name]: e.target.name === "employees" ? parseInt(e.target.value) : e.target.value,
        }));
    }

    return (<>
    <form onSubmit={e=>req_post(e)}>
        <label htmlFor="founder" >Founder</label>
        <input type="text" name="founder" onChange={handlechange}  id="founder" />
        <br />
        <label htmlFor="description">description</label>
        <input type="text" name="description" onChange={handlechange}  id="description" />
        <br />
        <label htmlFor="services_offered">services_offered</label>
        <input type="text" name="services_offered" id="services_offered" onChange={handlechange} />
        <br />
        <label htmlFor="logo">logo</label>
        <input type="text" name="logo" id="logo" onChange={handlechange} />
        <br />
        <label htmlFor="year_established">Year Established</label>
        <input type="text" name="year_established" id="year_established" onChange={handlechange} />
        <br />
        <label htmlFor="employees">Employees</label>
        <input type="number" name="employees" id="employees" onChange={handlechange} />
        <label htmlFor="valuation">Valuation</label>
        <input type="text" name="valuation" id="valuation" onChange={handlechange} />
        <input type="submit" value="submit" />
        </form>
    </>)
}