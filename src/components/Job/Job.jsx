import { useState } from "react";


const Job = ({ job }) => {
    const { logo, job_title, company_name,  remote_or_onsite,location, job_type, salary} = job;
    const [dataLength, setDataLength] = useState([]);
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                <figure><img src={logo} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{job_title}</h2>
                    <p>{company_name}</p>
                    <div>
                        <button className="px-5 py-2 font-extrabold">{remote_or_onsite}</button>
                        <button className="px-5 py-2 font-extrabold">{job_type}</button>
                    </div>
                        <div className="flex">
                            <p>Location: {location}</p>
                            <p>Salary: {salary}</p>
                        </div>
                    <div className="card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;