import React from 'react'

const Delete = ({
  handleDelete,
  deleteId,
  deleteStatus,
  hasError,
}) => {

  return (
    <div className='delete_form'>
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Delete Employee ?</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {deleteStatus === 1 ? 
                <div className='alert alert-success'>Employee has been deleted!</div>
                :
                ''
              }
              { hasError ?
                <div className='alert alert-danger'>{hasError}</div>
                :
                ''
              }
                
              {deleteStatus === 0 ? 
                <span>Are you sure you want to delete this employee!</span>
                :
                ''
              }
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" className="btn submit" value={deleteId} onClick={handleDelete}>Yes - Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Delete