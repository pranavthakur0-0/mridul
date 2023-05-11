import "./Addproject.scss"
export default function AddProject(){
    return (<>
            <div className="main_add_project">
                    <h2>Add Project</h2>
                    <div className="project_details">
                        <div className="input_con">
                            <label htmlFor="company">Company</label>
                            <input type="text" id="company" name="company"  placeholder="eg : Amazon"  />
                        </div>
                        <div className="input_con">
                            <label htmlFor="title">Title</label>
                            <input type="text" id="title" name="title"  placeholder="eg : Project Title" />
                        </div>
                        <div className="multiple_con">
                            <div className="input_wrap">
                             <label htmlFor="pay">Pay</label>
                            <input type="text" id="pay" name="pay" placeholder="eg : 50000"  />
                            </div>
                            <div className="input_wrap">                  
                            <label htmlFor="duration">Duration</label>
                            <input type="text" id="duration" name="duration"  placeholder="eg : 2 months" />
                            </div>
                            <div className="input_wrap">
                            <label htmlFor="employee_required">Employee Required</label>
                            <input type="number" id="employee_required" name="employee_required"   placeholder="eg : 10"  />
                            </div>
                        </div>
                        <div className="input_con">
                            <label htmlFor="title">Skills</label>
                            <input type="text" id="title" name="title"  placeholder="eg : Reactjs" />
                        </div>
                        <div className="input_con textarea_con">
                            <label htmlFor="title">Description</label>
                            <textarea type="text" id="title" name="title"  placeholder="eg : Details about the project" />
                        </div>
                        <div className="input_con button_con">
                            <button>Add Project</button>
                            <button>Cancel</button>
                        </div>
                    </div>
            </div>
        </>)
}