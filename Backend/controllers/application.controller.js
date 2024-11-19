import { Application } from "../models/application.model.js";
import { Job } from "../models/job.model.js";

export const applyJob = async (req,res)=>{
    try {
        const userId=req.id;
        const jobId = req.params.id;
        if(!jobId){
            return res.status(400).json({
                message:"Job id is requried",
                success:false
            })
        }
        const existingApplication = await Application.findOne({job:jobId, applicant:userId});

        if(existingApplication){
            return res.status(404).json({
                message:"You have already apllied for this job",
                success:false
            })
        }
        const job = await Job.findById(jobId)
        if(!job){
            return  res.status(404).json({
                message:"Job no found",
                success:false
            })
        }

        // create a new application

        const newApplication = await Application.create({
            job:jobId,
            applicant:userId,
        });
        job.applications.push(newApplication._id)
        await job.save();
        return res.status(201).json({
            message:"job applied successsfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

export const getAppliedJobs = async (req,res) => {
    try {
        const userId=req.id;
        const application = await Application.find({applicant:userId}).sort({createAt:-1}).populate({
            path:"job",
            options:{sort:{createAt:-1}},
            populate:{
                path:"company",
                options:{sort:{createAt:-1}}
            }
        })
        if(!application){
            return res.status(404).json({
                message:"no Application",
                success:false
            })
        
        }
        return res.status(200).json({
            application,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

export const getApplicants = async(req,res) =>{
    try {
        const jobId=req.params.id;
        const job=await Job.findById(jobId).populate({
            path:"applications",
            options:{sort:{created:-1}},
            populate:{
                path:"applicant"
            }
        })
        if(!job){
            return res.status(404).json({
                message:"Job not found",
                success:false
            })
        }
        return res.status(200).json({
            job,
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}

export const updateStatus = async(req,res) =>{
    try {
        const {status}=req.body;
        const applicationId= req.params.id;
        if(!status){
            return res.status(400).json({
                message:"Status is requried",
                success:false
            })
        }
        const application = await Application.findOne({_id:applicationId});
        if(!application){
            return res.status(404).json({
                message:"Application not found",
                success:false
            })
        }
        application.status=status.toLowerCase();
        await application.save();

        return res.status(200).json({
            message:"status updated successfully",
            success:true
        })
    } catch (error) {
        console.log(error)
    }
}