import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
//import { useHistory } from 'react-router-dom'
import axios from 'axios'
import Menu from '../common/Menu'
import Header from '../common/Header'
import Edit from './Edit'
import Delete from './Delete'
import Create from './Create'

// Static image for profile rendering
import profile from '../../assets/profile.png'
import logo from '../../assets/Logo2.png'

const Manager = () => {

  //const history = useHistory()

  const [employees, setEmployees] = useState([])
  const [hasError, setHasError] = useState('')
  const [success, setSuccess] = useState('')
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
        const { data }  = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
        setEmployees(data.data)
      } catch (err) {
        if (err.message) {
          setHasError('')
          setHasError(err.message + ' - Cannot get employees data. Keep refreshing your browser!')
        }
      }
    }
    getEmployees()
  }, [])

  const editHandle = (id, name, age, salary) => {
    
    // Clear all notifications
    setSuccess('')
    setHasError('')
    setDeleteStatus(0)


    setEmployee({ 'id': id, 'name': name, 'age': age, 'salary': salary })
  }

  const deleteHandle = (id) => {
    // Clear all notifications
    setSuccess('')
    setHasError('')
    setDeleteStatus(0)

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
      try {
        if (typeof(employee.id) !== 'string') {
          const { data } = await axios.get(`https://dummy.restapiexample.com/api/v1/employee/${employee.id}`)
          
          //Reset error notification
          setHasError('')

          // Data successfully retrieved
          setSuccess('Retrieved data')

          //Set retrieved data to employeeData object
          setEmployeeData(data.data)
        }
      } catch (err) {
        if (err.message) {

          // Clear form data
          const data = { employee_name: '', employee_salary: '', employee_age: '' }
          setEmployeeData(data)

          //Notify user there is an error
          setHasError(err.message + ' - Cannot get employee data. Choose another one!')
          setSuccess('')
        }
      }
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
      const result = await axios.put(
        `https://dummy.restapiexample.com/api/v1/update/${employee.id}`,
        JSON.stringify(employeeData)
      )
      
      if (result.status === 200) {
        //Set form back to default
        const data = { employee_name: '', employee_salary: '', employee_age: '' }
        setEmployeeData(data)

        // Remove error message
        setHasError('')

        // Notify user update is successful
        setSuccess(`You have successfully updated ${employeeData.employee_name}'s record`)
      }
    } catch (err) {
      if (err.message) {
        //Notify user record cannot be updated
        setHasError('Cannot update - ' + err.message + '. Keep submitting!')

        //Remove previously set successful entry notification - incase it was tried multiple times
        setSuccess('')
      }
    }
  }

  const handleDelete = (event) => {

    const getDelete = async () => {
      try {
        const { data } = await axios.delete(`https://dummy.restapiexample.com/api/v1/delete/${event.target.value}`)

        if (data.status === 'success') {
          // Notify user deletion was successful
          setHasError('')
          setDeleteStatus(1)

          // Update the user list - This will refresh the user list
          //const { data } = await axios.get('https://dummy.restapiexample.com/api/v1/employees')
          //setEmployees(data.data)
        }
      } catch (err) {
        if (err.message) {
          //Notify user record cannot be deleted
          setHasError('Cannot delete user - ' + err.message + '. Keep submitting!')
  
          //Remove previously set successful deletion - incase it was tried multiple times
          setDeleteStatus(0)
        }
      }  
    }
    getDelete()
  }

  return (
    <>
      <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow overall">
        <Link to='/manager' className="navbar-brand col-md-3 col-lg-2 me-0 px-3"><img src={logo} className='logo'/></Link>
        <button className="navbar-toggler position-absolute d-md-none collapsed" type="button" data-toggle="collapse" data-target="#sidebarMenu" aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
      </header>
      <div className='container-fluid manager'>
        <div className='row'>
          <Menu />
          <div className='col-md-10 col-sm-12 content'>
            <Header />
            
            <div className='main'>
              <h4>General Employees</h4>
              <table className="table table-responsive">
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
                        {hasError ? hasError : 'loading employees...'}
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
          success={success}
          hasError={hasError}
        />
        <Delete 
          handleDelete={handleDelete} 
          deleteId={deleteId}
          deleteStatus={deleteStatus}
          hasError={hasError}
        />
        <Create />
      </div>
    </>
  )
}

export default Manager