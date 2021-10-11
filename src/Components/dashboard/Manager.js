import React, { useEffect, useState } from 'react'
//import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Menu from '../common/Menu'
import Header from '../common/Header'
import Edit from './Edit'
import Delete from './Delete'
import Create from './Create'

// Static image for profile rendering
import profile from '../../assets/profile.png'

const Manager = () => {

  //const history = useHistory()

  const [employees, setEmployees] = useState([])
  const [hasError, setHasError] = useState(false)
  const [deleteId, setDelete] = useState(false)
  const [deleteStatus, setDeleteStatus] = useState(0)
  const [employee, setEmployee] = useState({
    id: '',
    name: '', 
    age: '',
    salary: '',
  })
  

  // API request
  useEffect(() => {
    const getEmployees = async () => {
      try {
        const { data }  = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        setEmployees(data.data)
      } catch (err) {
        setHasError(true)
      }
    }
    getEmployees()
  }, [])

  const editHandle = (id, name, age, salary) => {
    setEmployee({ 'id': id, 'name': name, 'age': age, 'salary': salary })
  }

  const deleteHandle = (id) => {
    setDelete(id)
  }


  // Edit Data Enpoint & State
  //const { id } = useParams()

  const [employeeData, setEmployeeData] = useState({ 
    employee_name: '', 
    employee_age: '', 
    emloyee_salary: '',
  })

  const [errors, setErrors] = useState({ 
    employee_name: '', 
    employee_age: '', 
    employee_salary: '',
  })


  useEffect(() => {
    const getData = async () => {

      const { data } = await axios.get(`http://dummy.restapiexample.com/api/v1/employee/${employee.id}`)

      console.log('Employee=>', data.data)
      setEmployeeData(data.data)
    }
    getData()
  }, [employee.id])  

  const handleChange = (event) => {
    const myForm = { ...employeeData, [event.target.name]: event.target.value }
    const newErrors = { ...errors, [event.target.name]: '' }
    setEmployeeData(myForm)
    setErrors(newErrors)
  }


  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.put(
        `http://dummy.restapiexample.com/api/v1/update/${employee.id}`,
        employeeData
      )

      //history.push('/manager')
    } catch (err) {
      console.log('Error=>', err)
      setErrors(err)
    }
  }

  const handleDelete = (event) => {
    console.log('changed=>', event.target.value)
    const getDelete = async () => {
      const { data } = await axios.delete(`http://dummy.restapiexample.com/api/v1/delete/${event.target.value}`)
      console.log('MYDATA', data)
      if (data.status === 'success') {
        setDeleteStatus(1)
        const { data } = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        console.log('RESULT', data)
        setEmployees(data.data)
      }
    }
    getDelete()
  }

  return (
    <>
      <div className='container-fluid manager'>
        <div className='row'>
          <div className='col-md-2 col-sm-2 menu'><Menu /></div>
          <div className='col-md-10 col-sm-10'>
            <Header />
            
            <div className='main'>
              <h4>General Employees</h4>
              <table className="table">
                <thead className="">
                  <tr>
                    <td>Images</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td className='text-center'>Action</td>
                  </tr>
                </thead>
                {employees.length > 0 ? 
                  <tbody>
                    {employees.map(employee => {
                      return <tr key={employee.id}>
                        <td><img src={profile} className='profile_pic' /></td>
                        <td>{employee.employee_name}</td>
                        <td>{employee.employee_age}</td>
                        <td>{employee.employee_salary}</td>
                        <td><button className='edit' role='button' data-toggle='modal' data-target='#editModal' onClick={() => editHandle(employee.id, employee.employee_name, employee.employee_age, employee.employee_salary)}>Edit</button>&nbsp;<button className='delete' role="button" data-toggle='modal' data-target='#deleteModal' onClick={() => deleteHandle(employee.id)}>Delete</button></td>
                      </tr>
                    })}
                  </tbody>
                  :
                  <tbody>
                    <tr>
                      <td className="title has-text-centered">
                        {hasError ? 'No employee data!' : 'loading employees...'}
                      </td>
                    </tr>  
                  </tbody>  
                }
              </table>
            </div>
          </div>
        </div>  
        <Edit 
          employeeData={employeeData}
          errors={errors}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          buttonText="Update Employee"
          // id={employee.id} 
          // name={employee.name} 
          // age={employee.age} 
          // salary={employee.salary}
        />
        <Delete 
          handleDelete={handleDelete} 
          deleteId={deleteId}
          deleteStatus={deleteStatus}
        />
        <Create />
      </div>
    </>
  )
}

export default Manager