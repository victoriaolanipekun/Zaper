import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Menu from '../common/Menu'
import Header from '../common/Header'
import Edit from './Edit'
import Delete from './Delete'
import Create from './Create'

const Manager = () => {

  const [employees, setEmployees] = useState([])
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const data = await axios.get('http://dummy.restapiexample.com/api/v1/employees')
        console.log('myData', data)
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
                <tbody>
                  <tr>
                    <td>Images</td>
                    <td>Name</td>
                    <td>Age</td>
                    <td>Salary</td>
                    <td><button className='edit' role="button" data-toggle='modal' data-target='#editModal'>Edit</button>&nbsp;<button className='delete' role="button" data-toggle='modal' data-target='#deleteModal'>Delete</button></td>
                  </tr>
                </tbody>
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