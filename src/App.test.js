// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders MLClassroom title', () => {
    render(<App />);
    const titleElement = screen.getByText(/MLClassroom/i);
    expect(titleElement).toBeInTheDocument();
});
