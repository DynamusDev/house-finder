import { colors } from "@/styles/colors";
import styled from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 31.8rem;
  border: 1px solid ${colors.grey["900"]};
  background-color: ${colors.grey["1000"]};
  padding: 1rem;

  h1 {
    font-weight: 400;
    font-size: 1.5rem;
  }

  .input-container {
    margin-bottom: 2rem;
    input {
      border: 1px solid ${colors.grey["1000"]};
      background: ${colors.surface};
      width: 100%;
      height: 2rem;
      padding: 0.5rem;
      caret-color: ${colors.grey["300"]};
      margin-top: 1.5rem;

      color: ${colors.grey["300"]};

      &:focus {
        outline: none;
      }
    }

    textarea {
      border: 1px solid ${colors.grey["1000"]};
      background: ${colors.surface};
      min-width: 100%;
      max-width: 100%;
      min-height: 6rem;
      max-height: 6rem;
      padding: 0.5rem;
      margin-top: 1.5rem;

      caret-color: ${colors.grey["300"]};
      color: ${colors.grey["300"]};

      &:focus {
        outline: none;
      }
    }

    .error-message {
      color: ${colors.error};
      font-size: 0.7rem;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;
