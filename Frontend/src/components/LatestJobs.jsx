// import { useSelector } from "react-redux"
// import LatestJobCards from "./LatestJobCards"

// // const randomJobs=[1,2,3,4,5,6,7,8]
// const LatestJobs = () => {
//   const {allJobs}=useSelector(store=>store.job)

//   return (
//     <div className="max-w-7xl mx-auto my-20">
//         <h1 className="text-4xl font-bold"><span className="text-[#6A38C2]">Latest & Top </span>Job Opening</h1>

//         {/* multiple job crts */}
//         <div className="grid grid-cols-3 gap-4 my-5">
//         {
//             // randomJobs.slice(0,6).map((item,index)=><LatestJobCards/>)
//             allJobs.length <=0 ? <span>No Job Available</span> : allJobs ?.slice(0,6).map((job)=><LatestJobCards key={job._id} job={job}/>)
//         }

//         </div>
        

//     </div>
//   )
// }

// export default LatestJobs
// import { useSelector } from "react-redux"
import LatestJobCards from "./Job";

// const randomJobs=[1,2,3,4,5,6,7,8]
const LatestJobs = () => {
  // const {allJobs}=useSelector(store=>store.job)

  return (
    <div className="max-w-7xl mx-auto my-20">
        <h1 className="text-4xl font-bold"><span className="text-[#6A38C2]">Latest & Top </span>Job Opening</h1>

        {/* multiple job crts */}
        <div className="grid grid-cols-3 gap-4 my-5">
            {/* randomJobs.slice(0,6).map((item,index)=><LatestJobCards/>) */}
           <LatestJobCards/>


        </div>
        

    </div>
  )
}

export default LatestJobs