import { render, screen, unmountComponentAtNode, act, fireEvent, within, getNodeText } from '@testing-library/react';
import App from './App';

let container = null;

beforeEach(() => {
  // setup a DOM element as a render target
  container = render(<App />)
});

afterEach(() => {
  // cleanup on exiting
  container = null;

});

function getrandomNumber() {
  return Math.floor(Math.random() * 10000);
}

test('check sum functional working', () => {
  const onChange = jest.fn();

  const num1Value = getrandomNumber();
  const num2Value = getrandomNumber();
  const outputValue = num1Value + num2Value;

  console.log("inputs", num1Value, num2Value)

  const num1InputElement = container.getByLabelText('num1-input')
  fireEvent.change(num1InputElement, { target: { value: num1Value } })

  const num2InputElement = container.getByLabelText('num2-input')
  fireEvent.change(num2InputElement, { target: { value: num2Value } })


  const sumButtonElement = container.getByLabelText('sum-button')
  const sumOutputElement = container.getByLabelText('sum-output')

  fireEvent.click(sumButtonElement)

  const output = getNodeText(sumOutputElement)

  expect(output).toEqual(outputValue.toString())

  console.log("outputs", output, outputValue.toString())


});

