import { useState } from "react"
export default function Register(){
    const [info, setinfo] = useState({
        email:"",
        username:"",
        passowrd:"7015477816@msMS",
        re_password:"7015477816@msMS",
    })
    const [show, setshow] = useState(false);

    const memberinfo = (e) => {
        setinfo((info) => ({
          ...info,
          [e.target.name]: e.target.value,
        }
      ));}

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
                    "password": "7015477816@msMS",
                    "re_password": "7015477816@msMS"
                }`,
                });
                
                response.json().then(data => {
                    console.log(data);
                  console.log(JSON.stringify(data));
                });

        } catch (err) {
          console.log(err);
        }
      }
      

    return (<>
    <form onSubmit={handleChange}>
    <label htmlFor="email">email</label>
        <input type="email" name="email" onChange={memberinfo} id="email" />
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" onChange={memberinfo}  />
        <label htmlFor="password">Password</label>
        <input type="password" defaultValue="7015477816@msMS" name="password" id="password"   onChange={memberinfo}/>
        <label htmlFor="re_password">Re_Password</label>
        <input type="password" defaultValue="7015477816@msMS" name="re_password" id="re_password"  onChange={memberinfo} />
        <input type="submit" value="Submit" />
        </form>
        
        <div className="main_login">
        <div className="login_con">
                     <h1>CorpoShare</h1>
                    <h3>Login</h3>
                    <p>Sign in to your account</p>
            <div className="login_wrap">
                    <form onSubmit={sendrequest}>
                        <div className="input_wrapper">
                        <label htmlFor="email">email</label>
                        <input type="email" name="email" onChange={memberinfo} id="email" />
                        </div>
                    <div className="input_wrapper">
                          <label htmlFor="user">Username</label><br />
                          <input title="Username of the Person" placeholder='info@email.com' className='input_box' type="text"  name="user" id='user' required  onChange={handlechange} />
                      </div>
                      <div className="input_wrapper">
                      <label htmlFor="pass">Password</label><br />
                      <div className="fake_box">
                        <input className='input_inside' placeholder='password' type={show ? "text" :"password"} required  name="password" title="Password of the Person" id='pass' onChange={handlechange} />
                        <div className="text" onClick={e=>{setshow(cur=>!cur)}}>{show ? <AiFillEyeInvisible /> : <AiFillEye /> }</div>
                    </div>
                      </div>
                      <input className='submit' title="Submit Button" type="submit" value="Login" />
                    </form>
            </div>
            <p>Forgot your password? <span>Reset Password</span></p>
            <p>Don't have and Account? <span>Create Account</span></p>
            </div>
    </div>
    </>)
}
