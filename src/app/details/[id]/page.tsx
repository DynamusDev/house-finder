"use client";
import { useCallback, useMemo, useState } from "react";
import { usePathname, redirect } from "next/navigation";
import Image from "next/image";
import { FaHeart, FaRegHeart } from "react-icons/fa";

import { Container, Content, Header, ModalContainer } from "./style";
import { useApp } from "@/context/appContext";
import { Property } from "@/types/house";
import { Button } from "@/components/Button";
import { Modal } from "@/components/Modal";
import { convertDateFormat } from "@/constants/stringFunctions";
import { ContactForm } from "@/components/ContactForm";
import InfiniteScroll from "react-infinite-scroll-component";
import { Card } from "@/components/Card";

export default function Details() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { properties, favoriteProperties, setFavoriteProperties } = useApp();
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  const propertyDetail = useMemo(() => {
    const property = properties.find((property) => property.Id === Number(id));

    if (!property) return redirect("/");

    return property;
  }, []) as Property;

  const isFavorited = useMemo(
    () => favoriteProperties?.find((property) => property.Id === Number(id)),
    [favoriteProperties, id]
  );

  const handleFavoriteProperty = useCallback(() => {
    if (isFavorited) {
      const newFavoritePropertiesArr = favoriteProperties.filter(
        (property) => property.Id !== Number(id)
      );
      setFavoriteProperties(newFavoritePropertiesArr);
      return;
    }

    setFavoriteProperties([...favoriteProperties, propertyDetail]);
    setIsModalOpen(true);
    return;
  }, [favoriteProperties, propertyDetail, id]);

  return (
    <Container>
      <Header>
        <div className="title-container">
          <h1>{propertyDetail.Title}</h1>
          <p>{propertyDetail.Location}</p>
        </div>
        <div className="price-container">
          <h1>$ {propertyDetail.SalePrice}</h1>
          <p>Date Listed: {convertDateFormat(propertyDetail.DateListed)}</p>
        </div>
        <Button
          title="Save Property"
          icon={isFavorited ? FaHeart : FaRegHeart}
          onClick={handleFavoriteProperty}
        />
      </Header>

      <Content>
        <div className="details-container">
          <Image
            src={propertyDetail.PictureURL}
            alt={propertyDetail.Title}
            height={400}
            width={600}
          />

          <div className="infos-container">
            <div className="info-item-container">
              <h1>{propertyDetail.Bedrooms}</h1>
              <p>BED</p>
            </div>
            <div className="info-item-container">
              <h1>{propertyDetail.Bathrooms}</h1>
              <p>BATH</p>
            </div>
            <div className="info-item-container">
              <h1>{propertyDetail.Parking}</h1>
              <p>PARKING</p>
            </div>
            <div className="info-item-container">
              <h1>{propertyDetail.Sqft}</h1>
              <p>SQFT</p>
            </div>
            <div className="info-item-container">
              <h1>{propertyDetail.YearBuilt}</h1>
              <p>YEAR BUILT</p>
            </div>
          </div>

          <p className="description">{propertyDetail.Description}</p>
        </div>

        <ContactForm />
      </Content>
      <Modal
        title="Favorite Properties"
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      >
        <ModalContainer>
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
            {favoriteProperties.map((item, index) => (
              <Card key={index} item={item} />
            ))}
          </InfiniteScroll>
        </ModalContainer>
      </Modal>
    </Container>
  );
}
