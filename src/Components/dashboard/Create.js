import React, { useState } from 'react'
import axios from 'axios'

const Create = () => {


  const [formData, setFormData] = useState({
    name: '',
    salary: '',
    age: '',
  })
  const [createErrors, setErrors] = useState('')
  const [success, setSuccess] = useState('')


  const handleChange = (event) => {
    const myForm = { ...formData, [event.target.name]: event.target.value }
    setFormData(myForm)
  }

  
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const result = await axios.post('https://dummy.restapiexample.com/api/v1/create', 
        JSON.stringify(formData)
      )


      if (result.status === 200) {
        //Set form back to default
        const data = { name: '', salary: '', age: '' }
        setFormData(data)
        setSuccess('You have successfully created an employee')
        setErrors('')
      }
    } catch (err) {
      if (err.message) {
        setErrors(err.message)
        setSuccess('')
      }
    }
  }

  return (
    <div className='create_form'>
      <div className='modal fade' id='createModal' tabIndex='-1' aria-labelledby='createModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <form id='create' onSubmit={handleSubmit}>
              <div className='modal-header'>
                <h5 className='modal-title' id='editModalLabel'>Create Employee</h5>
                <button type='button' className='btn-close' data-dismiss='modal' aria-label='Close'></button>
              </div>
              <div className='modal-body'>
                { createErrors ?
                  <div className='alert alert-danger'>{createErrors}</div>
                  :
                  ''
                }
                { success ?
                  <div className='alert alert-success'>{success}</div>
                  :
                  ''
                }

                <input type='text' name='name' className='form-control' placeholder='Enter employee name' value={formData.name} onChange={handleChange} />
                <input type='number' name='salary' className='form-control' placeholder='Enter salary' value={formData.salary} onChange={handleChange} />
                <input type='number' name='age' className='form-control' placeholder='Enter age' value={formData.age} onChange={handleChange} />
              </div>  
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
                <button type='submit' className='submit'>Create Employee</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Create