import { render, screen, cleanup } from '@testing-library/react';
import Todo from '../todo';
import renderer from 'react-test-renderer';


afterEach(() => {
  cleanup();
});

test('should render todo component', () => {
  const todo = { id: 1, title: "Hello World", completed: true };  
  render(<Todo todo={todo} />);
  const todoElement = screen.getByTestId('todo-1');
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent('Hello World');
  expect(todoElement).not.toContainHTML('<strike>');

});

test('matches snapshot', () => {
  const todo = { id: 1, title: "Hello World", completed: true }; 
  const tree = renderer.create(<Todo todo={todo} />).toJSON();
  expect(tree).toMatchSnapshot();


});

