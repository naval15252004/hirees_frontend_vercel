import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "@/redux/authSlice";
import { Loader2 } from "lucide-react";
import axios from "axios";
import { JOB_API_END_POINT } from "@/utils/constant";

const Job = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [job, setJob] = useState(null);
  const { user } = useSelector((store) => store.auth);
  const [isApplying, setIsApplying] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`${JOB_API_END_POINT}/jobs/${id}`, {
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        });
        setJob(response.data.job);
      } catch (error) {
        toast.error(error.response?.data?.message || "Failed to fetch job details");
        navigate("/jobs");
      }
    };

    fetchJob();
  }, [id, navigate]);

  const handleApply = async () => {
    if (!user) {
      toast.error("Please login to apply for jobs");
      navigate("/login");
      return;
    }

    try {
      setIsApplying(true);
      const { data } = await axios.post(
        `${JOB_API_END_POINT}/apply/${job._id}`,
        {},
        {
          withCredentials: true
        }
      );
      if (data.status) {
        toast.success(data.message);
        setIsApplied(true);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to apply for job");
    } finally {
      setIsApplying(false);
    }
  };

  if (!job) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{job.title}</h1>
          <div className="flex items-center text-gray-600 mb-4">
            <span className="mr-4">{job.company}</span>
            <span className="mr-4">{job.location}</span>
            <span>{job.type}</span>
          </div>
          <div className="prose max-w-none mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>
          <div className="prose max-w-none mb-6">
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.requirements?.map((req, index) => (
                <li key={index}>{req}</li>
              ))}
            </ul>
          </div>
          <div className="prose max-w-none mb-6">
            <h2 className="text-xl font-semibold mb-2">Benefits</h2>
            <ul className="list-disc list-inside text-gray-700">
              {job.benefits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <button
            onClick={handleApply}
            disabled={isApplying}
            className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md font-medium hover:from-orange-500 hover:to-red-600 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
          >
            {isApplying ? (
              <div className="flex items-center justify-center">
                <Loader2 className="w-4 h-4 animate-spin mr-2" />
                Applying...
              </div>
            ) : (
              "Apply Now"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Job;
