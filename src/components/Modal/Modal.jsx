import ReactDOM from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';

import css from './Modal.module.css';

import { toDoSelector } from './../../redux/toDo/toDoSelector';
import { toggleStatus } from './../../redux/toDo/toDoSlice';
import { isModalToDo } from './../../redux/modal/modalSlice';

export const Modal = ({ id }) => {
  const dispatch = useDispatch();
  const toDoS = useSelector(toDoSelector);
  const toDoUser = toDoS.find(item => item.id === id);

  return ReactDOM.createPortal(
    <div className={css.overlay}>
      <div className={css.modalWindow}>
        <h2 className={css.titleModal}>{toDoUser.title}</h2>
        <p className={css.descriptionModal}>
          Description:
          <span className={css.descriptionSpanModal}>
            {toDoUser.description}
          </span>
        </p>
        <div className={css.statusToDo}>
          <p className={css.statusModal}>Status:</p>
          <input
            type="checkbox"
            checked={toDoUser.status}
            onChange={() => dispatch(toggleStatus(id))}
          />
        </div>
        <button type="button" onClick={() => dispatch(isModalToDo(false))}>
          Close
        </button>
      </div>
    </div>,
    document.body
  );
};
