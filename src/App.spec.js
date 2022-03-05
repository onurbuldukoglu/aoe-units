import React from "react";
import { App } from "./App";
import { render } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';

describe('App component', () => {
  it('should render', () => {
    const { getByRole } = render(<BrowserRouter><App /></BrowserRouter>)
    expect(getByRole('link', { name: 'Units' })).toBeInTheDocument();
  })
})
