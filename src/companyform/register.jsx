import { useState } from "react"
import { useNavigate } from "react-router";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
export default function Register(){
  const [show, setshow] = useState(false);
  const navigate = useNavigate();
    const [info, setinfo] = useState({
        email:"",
        username:"",
        password:"7015477816@msMS",
        re_password:"7015477816@msMS",
    })
    const memberinfo = (e) => {
        setinfo((info) => ({
          ...info,
          [e.target.name]: e.target.value,
        }

      ));
    }

      const handleChange = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://3.143.239.250/api/api/register/", {
                method: 'POST',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json'
                },
                body: `{
                    "email": "${info.email}",
                    "username": "${info.username}",
                    "password": "${info.password}",
                    "re_password": "${info.re_password}"
                }`,
                });
                
                response.json().then(data => {
                    if(data){
                      navigate('/');
                    }
                });

        } catch (err) {
          console.log(err);
        }
      }
      

    return (<>
        <div className="main_login">
        <div className="login_con">
                     <h1>CorpoShare</h1>
                    <h3>Create an Account</h3>
            <div className="login_wrap">
                    <form onSubmit={handleChange}>
                        <div className="input_wrapper">
                        <label htmlFor="username">Username</label><br />
                          <input title="Username of the Person" placeholder='Username' className='input_box' type="username"  name="username" id='username' required  onChange={memberinfo} />
                        </div>
                    <div className="input_wrapper">
                          <label htmlFor="email">Email</label><br />
                          <input title="Email of the Person" placeholder='info@email.com' className='input_box' type="email"  name="email" id='email' required  onChange={memberinfo} />
                      </div>
                      <div className="input_wrapper">
                      <label htmlFor="pass">Password</label><br />
                      <div className="fake_box">
                        <input className='input_inside' placeholder='password' type={show ? "text" :"password"} required  name="password" title="Password of the Person" id='pass' onChange={memberinfo} />
                        <div className="text" onClick={e=>{setshow(cur=>!cur)}}>{show ? <AiFillEyeInvisible /> : <AiFillEye /> }</div>
                    </div>
                      </div>
                      <div className="input_wrapper">
                      <label htmlFor="pass">Re-Password</label><br />
                      <div className="fake_box">
                        <input className='input_inside' placeholder='Rewrite Password' type={show ? "text" :"password"} required  name="re_password" title="Re-Password of the Person" id='re_password' onChange={memberinfo} />
                        <div className="text" onClick={e=>{setshow(cur=>!cur)}}>{show ? <AiFillEyeInvisible /> : <AiFillEye /> }</div>
                    </div>
                      </div>
                      <input className='submit' title="Submit Button" type="submit" value="Sign Up" />
                    </form>
            </div>
            <p>Already have and account? <span>Login</span></p>
            </div>
    </div>
    </>)
}
