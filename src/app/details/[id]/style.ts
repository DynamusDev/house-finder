import styled from "styled-components";

import { colors } from "@/styles/colors";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 1rem 5rem;

  @media (max-width: 768px) {
    padding: 1rem 1rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-bottom: 1rem;

  .title-container {
    h1 {
      font-weight: 500;
      font-size: 1.5rem;
    }
  }

  .price-container {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    h1 {
      font-weight: 500;
      font-size: 1.5rem;
    }

    p {
      text-align: right;
      color: ${colors.grey["900"]};
    }
  }

  @media (max-width: 768px) {
    .title-container {
      h1 {
        font-weight: 500;
        font-size: 1rem;
      }

      p {
        font-size: 0.8rem;
      }
    }

    .price-container {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      margin-right: 1rem;

      h1 {
        font-weight: 500;
        font-size: 1rem;
      }

      p {
        color: ${colors.grey["900"]};
        font-size: 0.8rem;
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  gap: 1rem;

  .details-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 37.5rem;

    .infos-container {
      width: 100%;
      padding: 1rem;

      display: flex;
      justify-content: space-between;

      border: 1px solid ${colors.grey["900"]};

      .info-item-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        h1 {
          font-weight: 400;
        }

        p {
          color: ${colors.grey["900"]};
        }
      }
    }

    .description {
      color: ${colors.grey["700"]};
    }

    @media (max-width: 768px) {
      width: 25rem;

      img {
        width: 25rem;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const ModalContainer = styled.div`
  height: 40rem;
  width: 60rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
