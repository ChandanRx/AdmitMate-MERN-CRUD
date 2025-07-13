const Student = require('../models/studentsModel');

const postAdmission = async (req, res) => {
  const { fullname, email, phone, course, fees } = req.body

  if (!fullname, !email, !phone, !course, !fees) {
    console.log("all field required");
  }

  try {
    const student = new Student(req.body)
    const admission = await student.save()

    res.status(201).json({ message: "admission successful", admission })

  } catch (error) {
    res.status(404).json({ message: "admission failed", error })
  }
};

const getAllAdmission = async (req, res) => {
  try {
    const student = await Student.find()
    res.status(201).json({ message: "students list get", student })
  } catch (error) {
    res.status(404).json({ message: "cannot get admission list" })
  }
}

const getOneStudent = async (req, res) => {
  const id = req.params.id
  try {
    const student = await Student.findById(id)
    if (!student) {
      return res.status(404).json({ message: "student is not found" })
    }
    res.status(200).json({ message: "student found", student })
  } catch (error) {
    res.status(500).json({ message: "server error" })
  }
}

const deleteStudent = async (req, res) => {
  const id = req.params.id
  try {
    const student = await Student.findByIdAndDelete(id)
    res.status(201).json({ message: "student entry deleted", student })
  } catch (error) {
    res.status(404).json({ message: "failed to delete" })
  }
}

const editStudentEntry = async (req, res) => {
  const id = req.params.id
  try {
    const student = await Student.findByIdAndUpdate(id, req.body, { new: true })
    res.status(201).json({ message: "students updated", student })
  } catch (error) {
    res.status(404).json({ message: "edit failed" })
  }
}

const fieldEdit = async (req, res) => {
  const id = req.params.id
  try {
    const student = await Student.findByIdAndUpdate(id, { $set: req.body }, { new: true })
    res.status(201).json({message:"field updated"})
  } catch (error) {
    res.status(404).json({ message: "edit entry failed" })
  }
}

module.exports = { postAdmission, getAllAdmission, getOneStudent, deleteStudent, editStudentEntry , fieldEdit};