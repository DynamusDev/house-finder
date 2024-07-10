import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  margin: 1rem 0 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    transition: flex-direction 400ms ease;

    border-bottom: 1px solid ${colors.grey["900"]};
  }
`;

export const FilterSection = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const FilterDropdown = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-items: center;
  justify-content: center;

  select {
    padding: 8px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
    background-color: ${colors.surface};
    color: ${colors.grey["200"]};
    width: 4rem;

    @media (max-width: 768px) {
      width: 60%;
      text-align: center;
    }
  }

  .slide-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const RangeInput = styled.input`
  width: 10rem;
`;

export const ValueDisplay = styled.p`
  text-align: center;
  font-size: 16px;
  margin-bottom: 0.5rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
    transition: margin-top 400ms ease;
  }
`;

export const BtnFilterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 1rem 1rem 0 0;
`;
