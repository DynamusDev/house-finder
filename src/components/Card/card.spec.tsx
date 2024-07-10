import { render, screen, fireEvent } from "@testing-library/react";
import { Card } from "./index";
import "@testing-library/jest-dom";

const mockItem = {
  Id: 1,
  Title: "Sample Property",
  Location: "Sample Location",
  Bedrooms: 3,
  Bathrooms: 2,
  SalePrice: 300000,
  ThumbnailURL: "https://dummyimage.com/150x150/AAF4EE/000000",
  PictureURL: "https://dummyimage.com/350x350/AAF4EE/000000",
  Sqft: 4638,
  Parking: 4,
  YearBuilt: 2006,
  DateListed: "2023-03-03 17:41:13",
  Description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin dictum convallis vehicula. Morbi ac gravida mi. Nullam aliquam ut lorem ut fringilla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur consequat magna risus, at tempus magna semper eget. Sed eget finibus nisl, ut pellentesque mi. Pellentesque vulputate ultricies posuere. Vestibulum sagittis at eros non accumsan. Proin nec sollicitudin ante, tempus dignissim velit. Quisque bibendum pharetra purus, in cursus tortor condimentum et. Etiam vel dictum lacus. Nulla non ligula at tortor cursus sollicitudin blandit ut sem.",
};

describe("Card component", () => {
  it("renders card with item details", () => {
    render(<Card item={mockItem} />);

    const titleElement = screen.getByText(/Sample Property/i);
    const locationElement = screen.getByText(/Sample Location/i);
    const bedsBathsElement = screen.getByText(/3 beds | 2 baths/i);
    const priceElement = screen.getByText(/\$ 300000/i);

    expect(titleElement).toBeInTheDocument();
    expect(locationElement).toBeInTheDocument();
    expect(bedsBathsElement).toBeInTheDocument();
    expect(priceElement).toBeInTheDocument();
  });

  it('renders card with "View Details" button when showDetails is true', () => {
    render(<Card item={mockItem} showDetails />);

    const viewDetailsButton = screen.getByRole("link", {
      name: /View Details/i,
    });
    expect(viewDetailsButton).toBeInTheDocument();
  });
});
