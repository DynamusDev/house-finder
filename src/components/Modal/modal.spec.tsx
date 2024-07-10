import { render, screen, fireEvent } from "@testing-library/react";

import { Modal } from "./index";

describe("Modal component", () => {
  it("renders modal content and closes on button click", () => {
    const onCloseMock = jest.fn();

    render(
      <Modal title="Test Modal" isOpen={true} onClose={onCloseMock}>
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen.getByText("Modal Content")).toBeInTheDocument();

    fireEvent.click(screen.getByText("Close"));

    expect(onCloseMock).toHaveBeenCalled();
  });

  it("does not render modal content when isOpen is false", () => {
    render(
      <Modal title="Test Modal" isOpen={false} onClose={() => {}}>
        <p>Modal Content</p>
      </Modal>
    );

    expect(screen.queryByText("Modal Content")).not.toBeInTheDocument();
  });
});
