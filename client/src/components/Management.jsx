import React, { useState } from 'react'
import Form from './Form'
import Table from './Table'

const Management = () => {

    const [refresh, setRefresh] = useState(false)
    const [selectedStudent, setSelectedStudent] = useState(null)

    const handleEdit = (student) => {
        setSelectedStudent(student)
    }

    const handleRefresh = () => {
        setRefresh(prev => !prev)
    }


    return (
        <>
            <Form
                onSuccess={handleRefresh}
                EditData={selectedStudent}
                clearEdit={() => setSelectedStudent(null)}
            />
            <Table
                refresh={refresh}
                handleEdit={handleEdit}
            />
        </>
    )
}

export default Management