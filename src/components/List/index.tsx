import React, { useCallback, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "../Card";
import { HousesMock } from "@/constants/mock";
import { Container, ScrollContainer } from "./styles";
import { Filter } from "../Filter";
import { Property } from "@/types/house";
import { useApp } from "@/context/appContext";

interface FilterCriteria {
  bedroomsQuantity?: string;
  bathroomsQuantity?: string;
  parkingsQuantity?: string;
  priceRange?: string;
}
export function List() {
  const { properties, setProperties } = useApp();

  const filterProperties = useCallback(
    (filterOptions: FilterCriteria): Property[] => {
      return HousesMock.filter((property) => {
        return (
          (Number(filterOptions.priceRange) === 0 ||
            property.SalePrice <= Number(filterOptions.priceRange)) &&
          (Number(filterOptions.bedroomsQuantity) === 0 ||
            property.Bedrooms <= Number(filterOptions.bedroomsQuantity)) &&
          (Number(filterOptions.bathroomsQuantity) === 0 ||
            property.Bathrooms <= Number(filterOptions.bathroomsQuantity)) &&
          (Number(filterOptions.parkingsQuantity) === 0 ||
            property.Parking <= Number(filterOptions.parkingsQuantity))
        );
      });
    },
    []
  );

  const handleFIlter = useCallback(
    (data: FilterCriteria) => {
      setProperties(filterProperties(data));
      return;
    },
    [filterProperties, setProperties]
  );

  const handleClearFIlter = useCallback(() => {
    setProperties(HousesMock);
    return;
  }, []);

  return (
    <Container>
      <Filter
        items={properties}
        onSubmit={(data) => handleFIlter(data)}
        onClear={handleClearFIlter}
      />
      <ScrollContainer>
        <InfiniteScroll
          dataLength={properties.length}
          next={() => {}}
          hasMore={false}
          loader={<h4>Carregando...</h4>}
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
          }}
        >
          {properties.map((item, index) => (
            <Card key={index} item={item} showDetails />
          ))}
        </InfiniteScroll>
      </ScrollContainer>
    </Container>
  );
}
