import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Menu from '../common/Menu'
import Header from '../common/Header'
import Edit from './Edit'
import Delete from './Delete'
import Create from './Create'

// Static image for profile rendering
import profile from '../../assets/profile.png'

const Manager = () => {

  const [employees, setEmployees] = useState([])
  const [hasError, setHasError] = useState(false)

  // API request
  useEffect(() => {
    const getEmployees = async () => {
      try {
        const { data }  = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        // if (data.data.length > 0) {
        setEmployees(data.data)
        //}
        //return data
      } catch (err) {
        setHasError(true)
      }
    }
    getEmployees()
  }, [])

  console.log('employees', employees)

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
                        <td><button className='edit' data-id='`{employee.id}`' role='button' data-toggle='modal' data-target='#editModal'>Edit</button>&nbsp;<button className='delete' role="button" data-toggle='modal' data-target='#deleteModal'>Delete</button></td>
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
      </div>
      <Edit />
      <Delete />
      <Create />
    </>
  )
}

export default Manager