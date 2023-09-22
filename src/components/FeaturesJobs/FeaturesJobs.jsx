import { useEffect, useState } from "react";
import Job from "../Job/Job";


const FeaturesJobs = () => {

    const [jobs, setJobs] = useState([]);
    // this is not the best way to load show all data
    const [dataLength, setDataLength] = useState(4);

    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [])

    return (
        <div>
            <div className="text-center">
                <h2 className="text-5xl">Features Jobs</h2>
                <p>Explore thousands of job apportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-2 gap-6 mt-10 py-5">
                {
                    jobs.slice(0, dataLength).map(job => <Job key={job.id} job={job}></Job>)
                }
            </div>
            <div className={dataLength === jobs.length? 'hidden': ''}>
                <button onClick={()=>setDataLength(jobs.length)} className="btn btn-primary">Show All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturesJobs;