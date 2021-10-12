import React from 'react'


const Edit = ({
  employeeData,
  errors,
  handleChange,
  handleSubmit,
  success,
  hasError,
  buttonText = 'Submit',  
}) => {

  return (
    <div className='update_form'>
      <div className="modal fade" id="editModal" tabIndex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <div className='modal-header'>
                <h5 className='modal-title' id='editModalLabel'>Update Employee </h5>
                <button type='button' className='btn-close' data-dismiss='modal' aria-label='Close'></button>
              </div>
              <div className='modal-body'>
                { hasError ?
                  <div className='alert alert-danger'>{hasError}</div>
                  :
                  ''
                }
                { success ?
                  <div className='alert alert-success'>{success}</div>
                  :
                  ''
                }

                <input 
                  className={`input ${errors ? 'is-danger' : ''} form-control`} 
                  type='text' 
                  name='employee_name' 
                  id='name'
                  placeholder='Enter employee name' 
                  value={employeeData.employee_name}
                  onChange={handleChange} 
                  required='required'
                />

                <input 
                  className={`input ${errors ? 'is-danger' : ''} form-control`} 
                  type='number' 
                  name='employee_salary' 
                  id='salary'
                  placeholder='Enter salary' 
                  value={employeeData.employee_salary} 
                  onChange={handleChange} 
                  required='required'
                />

                <input 
                  className={`input ${errors ? 'is-danger' : ''} form-control`} 
                  type='number' 
                  name='employee_age' 
                  id='age'
                  placeholder='Enter age' 
                  value={employeeData.employee_age} 
                  onChange={handleChange} 
                  required='required'
                />
              </div>  
              <div className='modal-footer'>
                <button type='button' className='btn btn-secondary' data-dismiss='modal'>Close</button>
                <button type='submit' className='submit'>{buttonText}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Edit