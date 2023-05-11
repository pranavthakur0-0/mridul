import "./AddEmp.scss"
import { useState } from 'react';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';

export default function AddEmp(){
      const [value, onChange] = useState(new Date());
    return (<>
            <div className="main_emp">
                <div className="header">
                <h3>Add Staff</h3>
                    <div className="header_btn">
                        <button>Hello</button>
                    </div>
                </div>
                <div className="emp_info">
                    <div className="personal_info">
                        <div className="profile_img">
                            <div className="header">PROFILE IMAGE</div>
                            <div className="img_container">
                                    <img src="" alt="" />
                            </div>
                        </div>
                        <div className="emp_details">
                            <div className="header">EMPLOYEE DETAILS</div>
                            <div className="input_wrapper">
                                <div className="input_con">
                                    <label htmlFor="firstname">First Name</label>
                                    <input type="text" id="firstname" name="firstname" />
                                </div>
                            
                               <div className="input_con">
                                    <label htmlFor="lastname">Last Name</label>
                                    <input type="text" id="lastname" name="lastname" />
                                </div>

                                <div className="input_con_double">
                                 <div className="input_con">
                                <label htmlfor="gender">Gender:</label>
                                    <select name="gender" id="gender">
                                      <option value="male">Male</option>
                                      <option value="female">Female</option>
                                      <option value="other">Other</option>
                                    </select>
                                </div>
                                  <div className="input_con">
                                     <label htmlFor="age">Age</label>
                                    <input type="text" id="age" name="age" />
                                </div>
                                </div>

                                <div className="input_con">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email"></input>
                                </div>

                                <div className="input_con">
                                    <label htmlFor="contact">Contact</label>
                                    <input type="number"  id="contact" name="contact" />
                                </div>                           

                            </div>
                        </div>
                    </div>
                    <div className="company_info">
                        <div className="company_details">
                            <div className="header">COMPANY DETAILS</div>
                            <div className="info_details">
                                     <div className="input_wrapper">
                                <div className="input_con">
                                    <label htmlFor="company">Company Name</label>
                                    <input type="text"  id="company" name="company" />
                                </div>   
                                <div className="input_con">
                                    <label htmlFor="company">Department</label>
                                    <input type="text"  id="company" name="company" />
                                </div>  
                                <div className="input_con">
                                    <label htmlFor="hiredate">Hire Date</label>
                                    <DatePicker onChange={onChange} value={value} id="hiredate" name="hiredate" />
                                </div>    
                                </div>
                            </div>
                        </div>
                            <div className="company_details">
                            <div className="header">EMPLOYEE SKILLS</div>
                            <div className="info_details">
                                     <div className="input_wrapper">
                                <div className="input_con">
                                    <label htmlFor="education">Education</label>
                                    <input type="text"  id="education" name="education" />
                                </div>   
                                <div className="input_con">
                                    <label htmlFor="experience">Experience</label>
                                    <input type="text"  id="experience" name="experience" />
                                </div>  
                                    <div className="input_con">
                                    <label htmlFor="skill">Skills</label>
                                    <input type="text"  id="skill" name="skill" />
                                </div> 
                                <div className="input_con">
                                    <label htmlFor="zipcode">Resume</label>
                                    <input className="resume" type="file"  id="zipcode" name="zipcode" />
                                </div>   
                                     </div>
                            </div>
                        </div>
                    </div>
    
    

                     <div className="other_info company_info">
                        <div className="company_details">
                            <div className="header">OTHER DETAILS</div>
                            <div className="info_details">
                                     <div className="input_wrapper">
                                <div className="input_con">
                                    <label htmlFor="address1">Address Line 1</label>
                                    <input type="text"  id="address1" name="address1" />
                                </div>   
                                <div className="input_con">
                                    <label htmlFor="address2">Address Line 2</label>
                                    <input type="text"  id="address2" name="address2" />
                                </div>     
                                <div className="input_con">
                                    <label htmlFor="zipcode">Zipcode</label>
                                    <input type="number"  id="zipcode" name="zipcode" />
                                </div>                           
                                </div>
                            </div>
                        </div>
                            <div className="company_details">
                            <div className="info_details button_details">
                                   <button>Save</button>
                                   <button>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>)
}
