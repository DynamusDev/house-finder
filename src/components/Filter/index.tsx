import { useCallback, useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { FaFilter } from "react-icons/fa";

import {
  Container,
  FilterSection,
  FilterDropdown,
  RangeInput,
  ValueDisplay,
  ButtonContainer,
  BtnFilterContainer,
} from "./styles";
import { Button } from "../Button";
import { Property } from "@/types/house";

type Inputs = {
  priceRange: string;
  bedroomsQuantity: string;
  bathroomsQuantity: string;
  parkingsQuantity: string;
};

interface FilterProps {
  items: Property[];
  onSubmit: (data: Inputs) => void;
  onClear: () => void;
}

export function Filter({ items, onSubmit, onClear }: FilterProps) {
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const defaultValues: Inputs = {
    priceRange: minPrice.toString(),
    bedroomsQuantity: "1",
    bathroomsQuantity: "1",
    parkingsQuantity: "1",
  };

  const { register, handleSubmit, watch, reset } = useForm<Inputs>({
    defaultValues,
  });
  const priceRange = watch("priceRange");
  const handleOnSubmit: SubmitHandler<Inputs> = (data) => onSubmit(data);

  const options = [
    { value: 1, label: "1" },
    { value: 2, label: "2" },
    { value: 3, label: "3" },
    { value: 4, label: "4" },
    { value: 5, label: "5" },
    { value: 5, label: "6" },
    { value: 5, label: "7" },
    { value: 5, label: "8" },
    { value: 5, label: "9" },
  ];

  const handleClear = useCallback(() => {
    reset();
    onClear();
  }, []);

  useEffect(() => {
    items.forEach((property) => {
      setMinPrice(Math.min(minPrice, property.SalePrice));
      setMaxPrice(Math.max(maxPrice, property.SalePrice));
    });
  });

  return (
    <>
      {isMobile && (
        <BtnFilterContainer>
          <Button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            icon={FaFilter}
            data-testid={"mobile-filter-button"}
          />
        </BtnFilterContainer>
      )}
      {isMobile ? (
        isMenuOpen && (
          <Container onSubmit={handleSubmit(handleOnSubmit)}>
            <FilterSection>
              <FilterDropdown>
                <p className="label">Bedrooms:</p>
                <select
                  {...register("bedroomsQuantity")}
                  data-testid={"bedrooms-select"}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FilterDropdown>

              <FilterDropdown>
                <p className="label">Bathrooms:</p>
                <select
                  {...register("bathroomsQuantity")}
                  data-testid={"bathrooms-select"}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FilterDropdown>

              <FilterDropdown>
                <p className="label">Parking:</p>
                <select
                  {...register("parkingsQuantity")}
                  data-testid={"parkings-select"}
                >
                  {options.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </FilterDropdown>

              <FilterDropdown>
                <p className="label">Price Range:</p>
                <div className="slide-container">
                  <ValueDisplay>$ {priceRange}</ValueDisplay>
                  <RangeInput
                    type="range"
                    min={minPrice}
                    max={maxPrice}
                    data-testid={"range-input"}
                    {...register("priceRange")}
                  />
                </div>
              </FilterDropdown>
            </FilterSection>

            <ButtonContainer>
              <Button title="Search" type="submit" />
              <Button
                title="Clear"
                type="button"
                variant="secondary"
                onClick={handleClear}
              />
            </ButtonContainer>
          </Container>
        )
      ) : (
        <Container onSubmit={handleSubmit(handleOnSubmit)}>
          <FilterSection>
            <FilterDropdown>
              <p className="label">Bedrooms:</p>
              <select
                {...register("bedroomsQuantity")}
                data-testid={"bedrooms-select"}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FilterDropdown>

            <FilterDropdown>
              <p className="label">Bathrooms:</p>
              <select
                {...register("bathroomsQuantity")}
                data-testid={"bathrooms-select"}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FilterDropdown>

            <FilterDropdown>
              <p className="label">Parking:</p>
              <select
                {...register("parkingsQuantity")}
                data-testid={"parkings-select"}
              >
                {options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </FilterDropdown>

            <FilterDropdown>
              <p className="label">Price Range:</p>
              <div className="slide-container">
                <ValueDisplay>$ {priceRange}</ValueDisplay>
                <RangeInput
                  type="range"
                  min={minPrice}
                  max={maxPrice}
                  data-testid={"range-input"}
                  {...register("priceRange")}
                />
              </div>
            </FilterDropdown>
          </FilterSection>

          <ButtonContainer>
            <Button title="Search" type="submit" />
            <Button
              title="Clear"
              type="button"
              variant="secondary"
              onClick={handleClear}
            />
          </ButtonContainer>
        </Container>
      )}
    </>
  );
}
