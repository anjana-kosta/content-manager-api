import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios"
import moment from "moment";


const ActiveResource = () => {
const [resource, setResource] = useState({});
const [seconds, setSeconds] = useState();





useEffect(() => {
    async function fetchResource(){
        const axiosRes = await axios.get("/api/activeresource")
        const resource = axiosRes.data;

        const timeToFinish = parseInt(resource.timeToFinish, 10);
        const elapsedTime = moment().diff(moment(resource.activationTime), "seconds");
        const updatedTimeToFinish = (timeToFinish * 60) - elapsedTime;

        if(updatedTimeToFinish >= 0){
            resource.timeToFinish = updatedTimeToFinish;
            setSeconds(updatedTimeToFinish);
        }

        setResource(resource);
    }

    fetchResource();
}, [])

useEffect(() => {
const interval =  setInterval(() => {
    setSeconds(seconds - 1);
}, 1000);

if(seconds < 0){
clearInterval(interval)
}

return () => clearInterval(interval);
}, [seconds])

const completeResource = ()=>{
    //alert("activation resourcing!");
    axios.patch("/api/resources", {...resource, status: "complete"})
  .then(_ => location.reload())
  .catch(_ => alert("Can not complete the resource!"))
  }

const hasRecource = resource && resource.id;

    return (
            <div className="active-resource">
                <h1 className="resource-name">{hasRecource ? resource.title : "No recource Active"}</h1>
                    <div className="time-wrapper">{
                        hasRecource && 
                        ( seconds > 0 ? 
                            <h2 className="elapsed-time">
                                {seconds}
                            </h2> :
                            <h2 className="elapsed-time">
                                <button onClick={completeResource} className="button is-success">
                                    Click And done !
                                </button>
                            </h2>
                        )
                    }
                        
                    </div>
                    {
                       hasRecource ? 
                    <Link href={`/resources/${resource.id}`} legacyBehavior>
                      <a className="button">Go to Resource</a>
                    </Link> :
                    <Link href="/" legacyBehavior>
                    <a className="button">No active button</a>
                    </Link>
                    }
                    
            </div>
    )
}

export default ActiveResource;