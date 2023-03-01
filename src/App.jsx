import { Form } from 'components/Form/Form';
import { ToDoList } from 'components/ToDoList/ToDoList';

import css from './App.module.css';

export const App = () => {
  return (
    <section className={css.sectionToDo}>
      <h1 className={css.visually_hidden}>ToDoList</h1>
      <Form />
      <ToDoList />
    </section>
  );
};
