import React from "react";
import { Ages } from "./Ages";
import { List } from '../list/List';
import { fireEvent, render } from "@testing-library/react";
import { Provider } from 'react-redux';
import { store } from '../../app/store';
import { BrowserRouter } from 'react-router-dom';

describe('Ages component', () => {
  it('should filter units accordingly', () => {
    const { queryByText, getByRole } = render(<Provider store={store}><BrowserRouter><Ages /><List /></BrowserRouter></Provider>)
    const darkButton = getByRole('button', { name: 'Dark' });
    const castleButton = getByRole('button', { name: 'Castle' });
    const feudalButton = getByRole('button', { name: 'Feudal' });
    const imperialButton = getByRole('button', { name: 'Imperial' })

    fireEvent.click(darkButton);
    expect(queryByText('Crossbowman')).not.toBeInTheDocument();

    fireEvent.click(castleButton);
    expect(queryByText('Archer')).not.toBeInTheDocument();

    fireEvent.click(feudalButton);
    expect(queryByText('Samurai')).not.toBeInTheDocument();

    fireEvent.click(imperialButton);
    expect(queryByText('Galley')).not.toBeInTheDocument();
  })
})