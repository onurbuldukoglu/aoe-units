import React from "react";
import { Navigation } from './Navigation';
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';


describe('Navigation component', () => {
  it('should render', () => {
    const { getByText } = render(<BrowserRouter><Navigation /></BrowserRouter>)

    expect(getByText('Home')).toBeInTheDocument();
  })
})