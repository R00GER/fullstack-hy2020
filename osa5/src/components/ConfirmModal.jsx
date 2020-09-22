import React from 'react';
import PropTypes from 'prop-types';

const ConfirmModal = ({
  showConfirmDelete,
  deleteButtonLabel,
  cancelButtonLabel,
  handleDeletes,
}) => {
  if (showConfirmDelete.show) {
    return (
      <div className="confirm-modal">
        <div className="confirm-modal-title">
          <h2>confirm delete</h2>
        </div>
        <div className="confirm-modal-body">
          <p>{`delete blog ${showConfirmDelete.blog.title} by ${showConfirmDelete.blog.author}?`}</p>
        </div>
        <div className="confirm-modal-buttons">
          <button
            className="confirm-delete-btn"
            type="button"
            onClick={() => handleDeletes(showConfirmDelete.blog)}
          >
            {deleteButtonLabel}
          </button>
          <button type="button" onClick={() => handleDeletes()}>
            {cancelButtonLabel}
          </button>
        </div>
      </div>
    );
  }

  return null;
};

ConfirmModal.propTypes = {
  showConfirmDelete: PropTypes.instanceOf(Object).isRequired,
  deleteButtonLabel: PropTypes.string.isRequired,
  cancelButtonLabel: PropTypes.string.isRequired,
  handleDeletes: PropTypes.func.isRequired,
};

export default ConfirmModal;
