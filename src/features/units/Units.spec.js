import React from "react";
import { Units } from "./Units";
import { render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';

describe('Units component', () => {
  it('should render', () => {
    const { getByText } = render(<Provider store={store}><BrowserRouter><Units /></BrowserRouter></Provider>)
    expect(getByText('Wood')).toBeInTheDocument();
  })
})
