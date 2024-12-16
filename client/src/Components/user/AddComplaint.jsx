import React, { useState } from "react";

const AddComplaint = () => {
  const [formData, setFormData] = useState({
    date: "",
    name: "",
    address: "",
    ward: "",
    complaint: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   
  const id=formData.length + 1;
  console.log(formData);
  
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex items-center justify-center py-10">
      <form
        
        className="w-full max-w-lg bg-white shadow-lg rounded-xl p-8"
      >
        <div className="grid grid-cols-1 gap-5">
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <input
              id="date"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 outline-none rounded-md shadow-sm px-4 py-2  focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="mt-1 block w-full  outline-none border border-gray-300 rounded-md shadow-sm px-4 py-2  focus:border-green-500"
            />
          </div>
           
          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">
              Address
            </label>
            <textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Enter your address"
              rows={4}
              className="mt-1 block w-full outline-none border border-gray-300 rounded-md shadow-sm px-4 py-2  focus:border-green-500"
            ></textarea>
          </div>

          <div>
            <label htmlFor="ward" className="block text-sm font-medium text-gray-700">
              Ward
            </label>
            <input
              id="ward"
              name="ward"
              type="text"
              value={formData.ward}
              onChange={handleChange}
              placeholder="Enter your ward"
              className="mt-1 block w-full border outline-none border-gray-300 rounded-md shadow-sm px-4 py-2  focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="complaint" className="block text-sm font-medium text-gray-700">
              Complaint
            </label>
            <textarea
              id="complaint"
              name="complaint"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="Describe your complaint"
              rows={4}
              className="mt-1 block w-full outline-none border border-gray-300 rounded-md shadow-sm px-4 py-2  focus:border-green-500"
            ></textarea>
          </div>
        </div>
          
        <div className="mt-6 flex justify-center">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full sm:w-auto px-6 py-3 text-white bg-green-600 hover:bg-green-700 rounded-md shadow-lg focus:outline-none"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddComplaint;