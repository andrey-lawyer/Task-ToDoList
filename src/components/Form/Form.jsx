import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { addToDo } from 'redux//toDo/toDoSlice';

import css from './Form.module.css';

export const Form = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');

  const [description, setDescription] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    if (!title || !description) {
      if (!title) setTitleError(true);
      if (!description) setDescriptionError(true);
      return;
    }

    dispatch(addToDo({ title, description }));
    reset();
  };

  const reset = () => {
    setTitle('');
    setDescription('');
  };

  const handleChange = e => {
    setTitleError(false);
    setDescriptionError(false);
    const { name, value } = e.currentTarget;

    switch (name) {
      case 'title':
        setTitle(value);
        break;

      case 'description':
        setDescription(value);
        break;

      default:
        return;
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className={css.formToDo}>
          <label>
            Title:
            <input
              className={!titleError ? css.inputToDo : css.inputToDoError}
              value={title}
              onChange={handleChange}
              type="text"
              name="title"
              placeholder="Enter title"
            />
            {titleError && (
              <span className={css.errorInput}>This field is empty</span>
            )}
          </label>

          <label>
            Description:
            <input
              className={!descriptionError ? css.inputToDo : css.inputToDoError}
              value={description}
              onChange={handleChange}
              type="text"
              name="description"
              placeholder="Enter description"
            />
            {descriptionError && (
              <span className={css.errorInput}>This field is empty</span>
            )}
          </label>

          <button className={css.createToDo} type="submit">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};


