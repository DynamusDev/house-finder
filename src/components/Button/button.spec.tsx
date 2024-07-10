import { render, screen, fireEvent } from "@testing-library/react";
import { Button } from "./index";
import { FaCoffee } from "react-icons/fa";

describe("Button component", () => {
  it("renders button with title", () => {
    render(<Button title="Click me" />);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeTruthy();
  });

  it("renders button with icon", () => {
    render(<Button title="Coffee" icon={FaCoffee} />);
    const iconElement = screen.getByTestId("button-icon");
    expect(iconElement).toBeTruthy();
  });

  it("calls onClick handler when button is clicked", () => {
    const mockOnClick = jest.fn();
    render(<Button title="Click me" onClick={mockOnClick} />);
    const buttonElement = screen.getByText(/Click me/i);
    fireEvent.click(buttonElement);
    expect(mockOnClick).toHaveBeenCalled();
  });

  it("renders link with href when isLink is true", () => {
    render(<Button title="Link" isLink href="/path" />);
    const linkElement = screen.getByRole("link", { name: /Link/i });
    expect(linkElement).toBeTruthy();
    expect(linkElement.getAttribute("href")).toBe("/path");
  });
});
