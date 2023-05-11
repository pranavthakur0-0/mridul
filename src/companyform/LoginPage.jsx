import { useEffect, useState } from 'react';
import './LoginPage.scss'
import Cookies from 'js-cookie';
import { useNavigate } from 'react-router';
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link } from 'react-router-dom';
import { FaQuoteLeft } from "react-icons/fa";
export default function Login()
{

  const [show, setshow] = useState(false);
  const navigate = useNavigate();
  const [passmsg, setpassmsg] = useState();

    const [info, setinfo] = useState({
        password: "",
        username:""
      });
      const handlechange = (e) => {
        setinfo((info) => ({
          ...info,
          [e.target.name]: e.target.value,
        }));
    }


    useEffect(() => {
      if (info.password) {
        const strengthChecks = {
          length: 0,
          hasUpperCase: false,
          hasLowerCase: false,
          hasDigit: false,
          hasSpecialChar: false,
        };
        strengthChecks.length = info.password.length >= 8 ? true : false;
        strengthChecks.hasUpperCase = /[A-Z]+/.test(info.password);
        strengthChecks.hasLowerCase = /[a-z]+/.test(info.password);
        strengthChecks.hasDigit = /[0-9]+/.test(info.password);
        strengthChecks.hasSpecialChar = /[^A-Za-z0-9]+/.test(info.password);
        let verifiedList = Object.values(strengthChecks).filter((value) => value);
        let strength =
          verifiedList.length >= 4
            ? "Strong"
            : verifiedList.length >= 3
            ? "Medium"
            : "Weak";
        setpassmsg(strength);
      } else {
        // If info.password is not defined, set passmsg to an empty string
        setpassmsg("");
      }
    }, [info.password]);
    
    

    const sendrequest = async (e) => {
      e.preventDefault();
      try {
        const response = await fetch("http://18.222.166.42/api/token/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: info.username,
            password: info.password,
          }),
        });
        if (!response.ok) {
          throw new Error("Failed to login");
        }
        const data = await response.json();
        Cookies.set('accesstoken', `${data.access}`, { expires: 7 });
        Cookies.set('refreshtoken', `${data.refresh}`, { expires: 7 });
        if(true){
          navigate('/hello');
        }
      } catch (err) {
        console.log(err);
      }
    };
    

    return <>
            <div className="main_login_page">
              <div className="login_wrapper">
              <div className="login_art_">
                <div className="icon">
                  <div className="circle"></div>
                </div>
                <div className="text">
                  <h2>Let us help you run your freelance business.</h2>
                  <p>Our registration process is quick and easy, taking no more than 10 minutes to complete.</p>
                </div>
                <div className="card">
                      <FaQuoteLeft className='quotes_icon' />
                      <p>I'm impressed with the results l've seen since starting to use this product, I begin receiving
                       clients and projects in the first week.</p>
                </div>
              </div>
              <div className="login_details_">
              <form onSubmit={sendrequest} className='form_details'>
                <h1>Get started</h1>
                <p>Create your account now</p>
                <div className="input_wrapper">
                  <div className="text_label"><label htmlFor="user">Username</label></div>
       
                      <input title="Username of the Person" placeholder='info@email.com' className='input_box' type="text"  name="username" id='username' required  onChange={handlechange} />
                </div>
                <div className="input_wrapper">
                <div className="text_label"><label htmlFor="pass">Password</label></div>
                      <div className="fake_box">
                      <input   placeholder='password' type={show ? "text" :"password"} required  name="password" title="Password of the Person" id='pass' onChange={handlechange} />
                      <div className="eye_icon" onClick={e=>{setshow(cur=>!cur)}}>{show ? <AiFillEyeInvisible /> : <AiFillEye /> }</div>
                </div>
                
                <p className='passchecker' style={{color: passmsg === "Strong" ? "green" : passmsg === "Medium" ? "orange" : passmsg === "Weak" ? "red" : "white" }}>{passmsg}</p>

                      </div>
                      <input className='submit' title="Submit Button" type="submit" value="Login" />
               </form>
               <p className='alternate_acc_route'>Don't have an account ?  <Link className='link'>Register</Link> </p>
              </div>
              </div>



            </div>

    </>

}