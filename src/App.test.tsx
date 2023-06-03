import App from "./App";
import { render } from "@testing-library/react";


describe('Snapshot testing suite for whole App', () => {
    it('Matches DOM Snapshot', () => {
      const { asFragment } = render(<App />);
      expect(asFragment()).toMatchSnapshot();
    });
});