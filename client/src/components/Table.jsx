import React, { useEffect, useState } from 'react';
import '../css/Table.css';
import { FaEdit, FaTrash } from 'react-icons/fa';

const Table = ({ refresh , handleEdit}) => {
    const [students, setStudents] = useState([]);

    const fetchStudents = async () => {
        try {
            const students = await fetch('http://localhost:3000/api/admission/students')
            const data = await students.json()
            const AllStudents = data.student

            setStudents(AllStudents)

        } catch (error) {
            console.log("server error");
        }
    }

    const HandleDelete = async (id) => {
        const deleteRes = await fetch(`http://localhost:3000/api/admission/delete/${id}`, {
            method: "DELETE"
        })

        fetchStudents()
        console.log(deleteRes);
    }



    useEffect(() => {
        fetchStudents()
    }, [refresh])

    return (
        <div className="table-container">
            <h2>📋 Student Data</h2>
            <table className="student-table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fullname</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Course</th>
                        <th>Fees (₹)</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {students.length === 0 ? (
                        <tr>
                            <td colSpan="7">No data found</td>
                        </tr>
                    ) : (
                        students.map((stu, i) => (
                            <tr key={stu._id || i}>
                                <td>{i + 1}</td>
                                <td>{stu.fullname}</td>
                                <td>{stu.email}</td>
                                <td>{stu.phone}</td>
                                <td>{stu.course}</td>
                                <td>{stu.fees}</td>
                                <td>
                                    <button
                                        className="edit-btn"
                                        onClick={()=>handleEdit(stu)}
                                    >
                                        <FaEdit />
                                    </button>
                                    <button
                                        className="delete-btn"
                                        onClick={() => HandleDelete(stu._id)}
                                    >
                                        <FaTrash />
                                    </button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>

            </table>
        </div>
    );
};

export default Table;
