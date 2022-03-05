import { render } from "@testing-library/react";
import React from "react";
import { Home } from "./Home";

describe('Home Component', () => {
  it('should render empty div', () => {
    const { container } = render(<Home />);
    expect(container.firstChild).toBeEmpty()
  })
})
