import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Filter } from "./index";
import { HousesMock } from "@/constants/mock";

describe("Filter component", () => {
  const items = HousesMock;

  it("renders filter form and submits successfully", async () => {
    const onSubmitMock = jest.fn();
    const onClearMock = jest.fn();

    render(
      <Filter items={items} onSubmit={onSubmitMock} onClear={onClearMock} />
    );

    fireEvent.change(screen.getByTestId("bedrooms-select"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByTestId("bathrooms-select"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByTestId("parkings-select"), {
      target: { value: "2" },
    });

    fireEvent.click(screen.getByText(/Search/i));

    await waitFor(() => {
      expect(onSubmitMock).toHaveBeenCalledWith({
        bedroomsQuantity: "2",
        bathroomsQuantity: "2",
        parkingsQuantity: "2",
        priceRange: "0",
      });
    });

    expect(onClearMock).not.toHaveBeenCalled();
  });

  it("clears the form when Clear button is clicked", () => {
    const onSubmitMock = jest.fn();
    const onClearMock = jest.fn();

    render(
      <Filter items={items} onSubmit={onSubmitMock} onClear={onClearMock} />
    );

    fireEvent.change(screen.getByTestId("bedrooms-select"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByTestId("bathrooms-select"), {
      target: { value: "2" },
    });
    fireEvent.change(screen.getByTestId("parkings-select"), {
      target: { value: "2" },
    });

    fireEvent.click(screen.getByText(/Clear/i));

    expect(onClearMock).toHaveBeenCalled();
  });
});
