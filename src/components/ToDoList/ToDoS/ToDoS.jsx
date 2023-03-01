import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import css from './ToDoS.module.css';

import { toDoSelector } from 'redux/toDo/toDoSelector';
import { toggleStatus } from 'redux/toDo/toDoSlice';
import { modalSelector } from 'redux/modal/modalSelector';
import { isModalToDo } from 'redux/modal/modalSlice';

import { Modal } from 'components/Modal/Modal';

export const ToDoS = () => {
  const dispatch = useDispatch();
  const toDoS = useSelector(toDoSelector);
  const isModal = useSelector(modalSelector);
  const [id, setId] = useState('');

  const onClickModal = (e, id) => {
    if (e.target.type === 'checkbox') {
      return;
    }
    dispatch(isModalToDo(true));
    setId(id);
  };

  return (
    <>
      <tbody className={css.lines_columns}>
        {toDoS.map(({ id, title, description, status }) => (
          <tr className={css.lines} key={id} onClick={e => onClickModal(e, id)}>
            <td className={css.cells}>{id}</td>
            <td className={css.cells}>{title}</td>
            <td className={css.cells}>{description}</td>
            <td className={css.cells}>
              <input
                type="checkbox"
                checked={status}
                onChange={() => dispatch(toggleStatus(id))}
              />
            </td>
          </tr>
        ))}
      </tbody>
      {isModal && <Modal id={id} />}
    </>
  );
};
