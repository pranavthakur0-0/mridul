import "./Companyform.scss";
import Select from "react-select";
import axios from "axios";
import { useEffect, useState } from "react"
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

function Companyform() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  const [selectedOption, setSelectedOption] = useState([]);
  const [image, setimage] = useState("");
  const [userid, setuserid] = useState();
  const [info, setinfo] = useState({
      founder: "",
      description:"",
      services_offered:"",
      year_established:"",
      employees:"",
      valuation:"",
      user:""
    });


  useEffect(()=>{
    const TOKEN = Cookies.get('accesstoken');
    if(TOKEN){
      var decoded = jwt_decode(TOKEN);
      setuserid(decoded.user_id);
    }
  },[])

  const sending = async (e) => {
    e.preventDefault();
    const userobj = new FormData();
    userobj.append("name", info.founder);
    userobj.append("logo", image);
    userobj.append("email", info.email);
    userobj.append("location", info.location);
    userobj.append("founder", info.founder);
    userobj.append("employees", info.employees);
    userobj.append("year", info.year);
    userobj.append("services", selectedOption);
    userobj.append("desc", info.description);

    try {
      const response = await axios.post("ASdf", FormData);
      console.log(response);
    } catch (error) {
      if (error.response) {
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log("Error", error.message);
      }
    }
  };
  const handlechange = (e) => {
    setinfo((info) => ({
      ...info,
      [e.target.name]: e.target.name === "employees" ? parseInt(e.target.value) : e.target.value,
    }));}

  const handleimage = (e) => {
    setimage(e.target.files[0]);
  };

  return (
    <>
      <div className="main-company-form">
        <div className="company-from-wrapper">
          <div className="company-from-alpha">
            <h3>Cubix</h3>
            <h4>
              Start your <br />
              journey with us.
            </h4>
            <p>Discover world's best community for freelancer's.</p>
          </div>

          <div className="company-from-beta">
            <div className="from-beta-heading">
              <span>Sign Up</span>

              <div>Have an Account ? Login</div>
            </div>

            <form onSubmit={sending}>
              <div className="from-beta-name">
                <div className="div1">
                  <label id="label" htmlFor="company-name">
                    Company Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="company-name"
                    name="compname"
                    required
                    onChange={handlechange}
                    placeholder="Eg: Cubix"
                  />
                </div>
                <div className="div2">
                  <label htmlFor="images"> Logo </label>
                  <br />
                  <input
                    type="file"
                    id="images"
                    accept="image/*"
                    required
                    onChange={handleimage}
                  />
                </div>
              </div>
              <div className="from-beta-email">
                <div className="div1">
                  <label id="label" htmlFor="company-email">
                    Email
                  </label>
                  <br />
                  <input
                    type="text"
                    id="company-email"
                    name="email"
                    required
                    onChange={handlechange}
                    placeholder="Eg: info@cubix.com"
                  />
                </div>
                <div className="div2">
                  <label id="label" htmlFor="company-location">
                    Location
                  </label>
                  <br />
                  <input
                    type="text"
                    id="company-location"
                    name="location"
                    required
                    onChange={handlechange}
                    placeholder="Eg: Delhi"
                  />
                </div>
              </div>
              <div className="from-beta-details">
                <div className="div1">
                  <label id="label" htmlFor="company-founder">
                    Founder Name
                  </label>
                  <br />
                  <input
                    type="text"
                    id="company-founder"
                    name="founder"
                    required
                    onChange={handlechange}
                    placeholder="Eg: John"
                  />
                </div>
                <div className="detail-wrapper">
                  <div className="div2">
                    <label htmlFor="company-services">No. of Employees</label>
                    <br />
                    <input
                      type="number"
                      id="company-services"
                      name="employees"
                      required
                      onChange={handlechange}
                      placeholder="Eg: 50"
                    />
                  </div>
                  <div className="div3">
                    <label id="label" htmlFor="company-year">
                      Establishment Year{" "}
                    </label>
                    <br />
                    <input
                      type="number"
                      id="company-year"
                      name="year"
                      required
                      onChange={handlechange}
                      placeholder="Eg: 2022"
                    />
                  </div>
                </div>
              </div>
              <div className="from-beta-dropdown">
                <label id="label" htmlFor="company-services">
                  Services Offered
                </label>
                <div className="company-services-dropdown">
                  <Select
                    required={true}
                    isMulti={true}
                    onChange={(e) => {
                      setSelectedOption(e);
                    }}
                    options={options}
                  />
                </div>
              </div>

              <div className="from-beta-textarea">
                <label id="label" htmlFor="text-desc">
                  Description
                </label>
                <br />
                <textarea
                  id="text-desc"
                  name="desc"
                  required
                  onChange={handlechange}
                  placeholder="Write something about your company"
                />
              </div>

              <div className="from-beta-textarea-onsubmit">
                <input type="submit" name="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Companyform;



