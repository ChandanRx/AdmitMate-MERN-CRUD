import React, { useEffect, useState } from 'react';
import '../css/Form.css';

const Form = ({ onSuccess, EditData, clearEdit }) => {

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    course: "",
    fees: ""
  })


  useEffect(()=>{
     if(EditData){
      setFormData(EditData)
     }
  },[EditData])

  const HandleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      if (EditData) {
        const EditRes = await fetch(`https://admitmate-mern-crud-1.onrender.com/api/admission/edit/${EditData._id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })

        const data = await EditRes.json()

        if (!EditRes.ok) {
          return alert("failed to edit data")
        }


        alert("data successfully edited")


      } else {

        const submitRes = await fetch('http://localhost:3000/api/admission', {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(formData)
        })

        const data = await submitRes.json()

        if (!submitRes.ok) {
          return alert("failed to submit")
        }

        alert("data successfully submitted")

      }

      setFormData({
        fullname: "",
        email: "",
        phone: "",
        course: "",
        fees: ""
      })
      onSuccess()
      clearEdit()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="page-wrapper">
      <form className="form-row" onSubmit={handleSubmit}>
        <input
          type="text"
          name="fullname"
          placeholder="Fullname"
          value={formData.fullname}
          onChange={HandleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={HandleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={HandleChange}
          required
        />
        <input
          type="text"
          name="course"
          placeholder="Course"
          value={formData.course}
          onChange={HandleChange}
          required
        />
        <input
          type="number"
          name="fees"
          placeholder="Fees (₹)"
          value={formData.fees}
          onChange={HandleChange}
          required
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
