import css from './ToDoList.module.css';
import { ToDoS } from './ToDoS/ToDoS';

export const ToDoList = () => {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.title_lines}>
          <th className={css.title_cells}>ID</th>
          <th className={css.title_cells}>TITLE</th>
          <th className={css.title_cells}>DESCRIPTION</th>
          <th className={css.title_cells}>STATUS</th>
        </tr>
      </thead>
      <ToDoS />
    </table>
  );
};
