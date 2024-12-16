import { useState } from "react";
import AddComplaint from "../user/AddComplaint";
const ComplaintPage = () => {
  const [data,setData]=useState([
    { id: 1, date: "2024-12-01", username: "nish",address:"ggfd",ward:"4",complaint: "snhh."},
    { id: 2, date: "2024-11-29", username: "saaf",address:"hhhfd",ward:"4",complaint: "fbgg."},
    { id: 3, date: "2024-11-25", username: "jaas",address:"ggfdggg", ward:"4",complaint: "ggfd."},
  ]);

 const handleDelete=(id)=>{
  const deleteData=data.filter((complaint)=>complaint.id !== id);
  setData(deleteData);
 }
  return (
    <div className="min-h-screen bg-gray-100 ">
      <div className="container mx-auto py-52 flex justify-center ">
        <div className="overflow-x-auto shadow-md">
          <table className="min-w-full bg-white shadow-md rounded">
            <thead>
            <tr>
                <th className="text-left py-3 px-8">SI No</th>
                <th className="text-left py-3 px-8">Date</th>
                <th className="text-left py-3 px-8">Username</th>
                <th className="text-left py-3 px-8">Address</th>
                <th className="text-left py-3 px-8">Ward</th>
                <th className="text-left py-3 px-8">Complaint</th>
              
              </tr>
            </thead>
             
            
            
              {data.map((complaint) => (
                <tr key={complaint.id} className="border-b">
                  <td className="py-3 px-8">{complaint.id}</td>
                  <td className="py-3 px-8">{complaint.date}</td>
                  <td className="py-3 px-8">{complaint.username}</td>
                  <td className="py-3 px-8">{complaint.address}</td>
                  <td className="py-3 px-8">{complaint.ward}</td>
                  <td className="py-3 px-8">{complaint.complaint}</td>
                
                </tr>
                
              ))}
          <button onClick={()=>handleDelete(complaint.id)} className="  group relative w-16 h-10 flex justify-center items-center font-medium rounded-md   bg-red-700 hover:bg-red-700" >Delete</button>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ComplaintPage;
