import { screen, render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import Navbar from '../Navbar';
import '@testing-library/jest-dom';

const MockNavbar = () => (
  <BrowserRouter>
    <Navbar />
  </BrowserRouter>
);

describe('Navbar component', () => {
  it('Navbar element is in the document', () => {
    render(<MockNavbar />);
    const HEADING_ELEMENT = screen.getByRole('heading');
    expect(HEADING_ELEMENT).toMatchSnapshot();
  });
});
