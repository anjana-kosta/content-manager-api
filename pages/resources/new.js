import Layout from "component/Layout";
//import { use, useState } from "react";
import ResourceForm from "component/ResourceForm";
import axios from "axios";
import { useRouter } from "next/router";

const ResourceCreate = () => {
  const router = useRouter();

    const createResource = formData => {
        //alert(JSON.stringify(form));
        // fetch("/api/resources", {
        //     body: JSON.stringify(form),
        //     headers:{"Content-Type": "application/json"},
        //     method:"POST"
        // })
        axios.post("/api/resources", formData)
        .then(_ => router.push("/"))
        .catch(err => alert(err.response.data))
    }
    

    // const resetForm = () => setForm(DEFAULT_DATA)

    // const handTitleChange = (e) => {
    //     // console.log("called on:" + e.target.name);
    //     const { name, value } = e.target;
    //     setForm({
    //         ...form,
    //         [name]:value
    //     })
    // }

// const person = undefined;
// {person?.name}
    return (
        <Layout>
            <div className="container">
                <div className="columns">
                    <div className="column is-8 is-offset-2">
                        <div className="content is-medium">
                            <ResourceForm onFormSubmit = {createResource} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ResourceCreate;