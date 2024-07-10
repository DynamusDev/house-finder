import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ContactForm } from "./index";

describe("ContactForm component", () => {
  it("renders contact form and submits successfully", async () => {
    render(<ContactForm />);

    fireEvent.change(screen.getByPlaceholderText(/Full Name \*/i), {
      target: { value: "John Doe" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Email \*/i), {
      target: { value: "john.doe@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Phone Number \*/i), {
      target: { value: "1234567890" },
    });
    fireEvent.change(screen.getByPlaceholderText(/Comments \*/i), {
      target: { value: "This is a test comment" },
    });

    fireEvent.click(screen.getByText(/Contact Now/i));

    await waitFor(() => {
      expect(
        screen.getByText(/Message sent successfully/i)
      ).toBeInTheDocument();
    });

    expect(screen.getByPlaceholderText(/Full Name \*/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Email \*/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Phone Number \*/i)).toHaveValue("");
    expect(screen.getByPlaceholderText(/Comments \*/i)).toHaveValue("");
  });
});
