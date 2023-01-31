import { useState } from "react";


const DEFAULT_DATA = {
    title:"",
    description:"",
    link:"",
    priority:"2",
    timeToFinish: 60
}

const ResourceForm = ({onFormSubmit, initialData}) => {
    const [form, setForm] = useState(initialData || DEFAULT_DATA);

    const resetForm = () => setForm(DEFAULT_DATA)

    const handTitleChange = (e) => {
        // console.log("called on:" + e.target.name);
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const submitForm = () => {
        onFormSubmit(form);
    }

    return (
        <div className="resource-form">
                                <h1 className="title">Add new Resource</h1>
                            <form>
                                <div className="field">
                                    <label className="lable">Title</label>
                                    <div className="control">
                                    <input name="title" onChange={handTitleChange} className="input" value={form.title} type="text" placeholder="Learn NEXT JS and Express JS" />
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="lable">Description</label>
                                    <div className="control">
                                    <textarea class="textarea" name="description" onChange={handTitleChange} value={form.description} placeholder="Learn these technology and make the ouw carrier then do set the goal in the fututer "></textarea>
                                    </div>
                                </div>

                                <div className="field">
                                    <label className="lable">Link</label>
                                    <div className="control">
                                    <input className="input" name="link" onChange={handTitleChange} value={form.link} type="text" placeholder="http://anjana.com" />
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">Priority</label>
                                   <div className="control">
                                        <div className="select">
                                          <select name="priority" onChange={handTitleChange} value={form.priority}>
                                              <option>1</option>
                                              <option>2</option>
                                              <option>3</option>
                                           </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="lable">Time To Finish</label>
                                    <div className="control">
                                    <input className="input" name="timeToFinish" onChange={handTitleChange} value={form.timeToFinish} type="number" placeholder="60" />
                                    </div>
                                    <p className="help">Time is in minitus</p>
                                </div>

                                <div className="field is-grouped">
                                    <div className="control">
                                       <button type="button" onClick={submitForm} className="button is-link">Submit</button>
                                    </div>
                                    <div className="control">
                                       <button type="button" onClick={resetForm} className="button is-link is-light">Reset Form</button>
                                    </div>
                                </div>
                            </form>
                            </div>
    )
}

export default ResourceForm;