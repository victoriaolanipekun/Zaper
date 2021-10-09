import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Menu from '../common/Menu'
import Header from '../common/Header'

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
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-2 col-sm-2 menu'><Menu /></div>
          <div className='col-md-10 col-sm-10'>
            <Header />
          </div>
        </div>  
      </div>
    </>
  )
}

export default Manager