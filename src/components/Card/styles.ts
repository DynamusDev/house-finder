import { colors } from "@/styles/colors";
import styled from "styled-components";

export const CardContainer = styled.div`
  width: 12.5rem;
  height: 25rem;
  border: 1px solid #ccc;
  margin: 10px;
  box-sizing: border-box;

  .image-container {
    display: flex;
    height: 50%;

    align-items: center;
    justify-content: center;
    background-color: ${colors.blue["200"]};
  }

  .info-container {
    display: flex;
    height: 50%;
    flex-direction: column;
    padding: 0.5rem;
    justify-content: space-between;

    .data-container {
      .title {
        font-weight: 500;
        font-size: 1rem;
      }

      .content {
        font-size: 0.8rem;
        color: ${colors.grey["700"]};
        margin-top: 0.2rem;
      }
    }

    .details-container {
      .price {
        font-size: 1.5rem;
      }
    }
  }

  @media (max-width: 768px) {
    width: 12rem;
    height: 21rem;

    .image-container {
      display: flex;
      height: 9.37rem;
      width: 100%;
    }
  }
`;
