import { Property } from "@/types/house";
import { CardContainer } from "./styles";
import Image from "next/image";
import { Button } from "../Button";

interface CardProps {
  item: Property;
  showDetails?: boolean;
}
export function Card({ item, showDetails }: CardProps) {
  return (
    <CardContainer>
      <div className="image-container">
        <Image
          loading="lazy"
          src={item.ThumbnailURL}
          alt={item.Title}
          height={150}
          width={150}
        />
      </div>

      <div className="info-container">
        <div className="data-container">
          <h1 className="title">{item.Title}</h1>
          <p className="content">{item.Location}</p>
          <p className="content">
            {item.Bedrooms} beds | {item.Bathrooms} baths
          </p>
        </div>
        <div className="details-container">
          <p className="price">$ {item.SalePrice}</p>
          {showDetails && (
            <Button
              isLink
              href={`/details/${item.Id}`}
              title="View Details"
              onClick={() => console.log("clicked")}
            />
          )}
        </div>
      </div>
    </CardContainer>
  );
}
