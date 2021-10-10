import React from 'react'

const Delete = () => {

  return (
    <div>
      <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteModalLabel">Delete Employee ?</h5>
              <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this employee?
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">No</button>
              <button type="button" className="btn btn-primary">Yes - Delete</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Delete