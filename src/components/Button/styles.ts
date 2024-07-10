import styled from "styled-components";
import Link from "next/link";

import { ButtonVariantT } from "./types";
import { colors } from "@/styles/colors";

export type ButtonT = {
  variant: ButtonVariantT;
};

export const ButtonContainer = styled.button<ButtonT>`
  display: flex;
  gap: 0.5rem;

  align-items: center;
  justify-content: center;

  width: auto;
  padding: 1rem;
  height: 2.5rem;
  background-color: ${({ variant }) =>
    variant === "primary" ? colors.blue[200] : "transparent"};
  color: ${({ variant }) =>
    variant === "primary" ? colors.surface : colors.grey["300"]};
  font-size: 1rem;
  font-weight: 500;
  white-space: nowrap;

  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;

    transition: opacity 400ms ease;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

export const StyledNextLink = styled(Link)`
  display: flex;
  gap: 0.5rem;

  align-items: center;
  justify-content: center;

  width: 10rem;
  height: 2.5rem;
  background-color: ${colors.blue[200]};
  color: ${colors.surface};
  font-size: 1rem;
  font-weight: 500;

  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;

    transition: opacity 400ms ease;
  }

  @media (max-width: 768px) {
    font-size: 0.7rem;
    width: auto;
  }
`;
