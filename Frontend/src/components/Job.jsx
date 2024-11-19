// import { Bookmark } from "lucide-react"
// import { useNavigate } from "react-router-dom"
// import { Avatar, AvatarImage } from "./ui/avatar"
// import { Badge } from "./ui/badge"
// import { Button } from "./ui/button"

// const Job = () => {
//     const navigate=useNavigate();
//     const jobId="jdddjkdnkjdjdk"
//     return (
//         <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
//             <div className="flex items-center justify-between">
//                 <p className="text-sm text-gray-500">2 days ago</p>
//                 <Button variant="outline" className="rounded-full" size="icon">
//                     <Bookmark />
//                 </Button>
//             </div>

//             <div className="flex items-center gap-2 my-2">
//                 <Button className="p-6" variant="outline" size="icon">
//                     <Avatar>
//                         <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
//                     </Avatar>
//                 </Button>
//                 <div>
//                     <h1 className="font-medium text-lg">{job?.company?.name}</h1>
//                     <p className="text-sm text-gray-500">India</p>
//                 </div>
//             </div>
//             <div>
//                 <h1 className="font-bold text-lg my-2 ">{job?.title}</h1>
//                 <p className="text-sm text-gray-600">{job?.description}</p>
//             </div>
//             <div className="flex items-center gap-2 mt-4">
//                 <Badge className={'text-blue-700 font-bold'} variant={"ghost"}>{job?.position}</Badge>
//                 <Badge className={'text-[#F83002] font-bold'} variant={"ghost"}>{job?.jobType}</Badge>
//                 <Badge className={'text-[#7269b7] font-bold'} variant={"ghost"}>{job?.salary}LPA</Badge>
//             </div>

//             <div className="flex items-center gap-4 mt-4">
//                 <Button onClick={()=>navigate(`/description/${job?._id}`)} variant="outline">Details</Button>
//                 <Button className="bg-[#7209b7]">Save for later</Button>
//             </div>
//         </div>
//     )
// }

import PropTypes from 'prop-types';
import { Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import Jobs from './jobs';

const Job = ({ job }) => {
    const navigate = useNavigate();

    return (
        <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100 mr-4">
            <div className="flex items-center justify-between">
                <p className="text-sm text-gray-500">2 days ago</p>
                <Button variant="outline" className="rounded-full" size="icon">
                    <Bookmark />
                </Button>
            </div>

            <div className="flex items-center gap-2 my-2">
                <Button className="p-6" variant="outline" size="icon">
                    <Avatar>
                        <AvatarImage src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg" />
                    </Avatar>
                </Button>
                <div>
                    <h1 className="font-medium text-lg">{job.company}</h1>
                    <p className="text-sm text-gray-500">India</p>
                </div>
            </div>
            <div>
                <h1 className="font-bold text-lg my-2">{job.title}</h1>
                <p className="text-sm text-gray-600">{job.description}</p>
            </div>
            <div className="flex items-center gap-2 mr-4">
                <Badge className="text-blue-700 font-bold" variant="ghost">{job.position}</Badge>
                <Badge className="text-[#F83002] font-bold" variant="ghost">{job.jobType}</Badge>
                <Badge className="text-[#7269b7] font-bold" variant="ghost">{job.salary} LPA</Badge>
            </div>

            <div className="flex items-center gap-4 mr-4">
                <Button onClick={() => navigate(`/description/${job.id}`)} variant="outline">Details</Button>
                <Button className="bg-[#7209b7]">Save for later</Button>
            </div>
        </div>
    );
};

Job.propTypes = {
    job: PropTypes.shape({
        company: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        position: PropTypes.string.isRequired,
        jobType: PropTypes.string.isRequired,
        salary: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};


const LatestJobCards = () => {
    const latestJobs = [
        {
            id: '1',
            company: 'Demo Company 1',
            title: 'Frontend Developer',
            description: 'This is a description for the Frontend Developer position.',
            position: 'Frontend Developer',
            jobType: 'Full-time',
            salary: '6'
        },
        {
            id: '2',
            company: 'Demo Company 2',
            title: 'Backend Developer',
            description: 'This is a description for the Backend Developer position.',
            position: 'Backend Developer',
            jobType: 'Part-time',
            salary: '4'
        },
        {
            id: '3',
            company: 'Demo Company 3',
            title: 'Fullstack Developer',
            description: 'This is a description for the Fullstack Developer position.',
            position: 'Fullstack Developer',
            jobType: 'Contract',
            salary: '8'
        },
        {
            id: '4',
            company: 'Demo Company 4',
            title: 'Data Science',
            description: 'This is a description for the Fullstack Developer position.',
            position: 'Data Science',
            jobType: 'Full Time',
            salary: '8'
        }
    ];
    return (
        <div className="flex flex-row items-center">
            {latestJobs.map(job => (
                <Job key={job.id} job={job} />
            ))}
            <Jobs data={latestJobs} />
        </div>
    );
};

export default LatestJobCards;
