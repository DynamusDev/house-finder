import { colors } from "@/styles/colors";
import styled from "styled-components";

export const StyledModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.5);
  overflow-y: auto;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledModalContent = styled.div`
  padding: 0.5rem 0;
  border: 1px solid ${colors.grey["200"]};
  min-width: 24rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border-radius: 0.375rem;
  background-color: ${colors.white};
`;

export const StyledModalHeader = styled.div`
  text-align: center;
`;

export const StyledModalTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: bold;
  color: #1a202c;
`;

export const StyledModalBody = styled.div`
  margin-top: 0.5rem;
  padding: 1.75rem;
`;

export const StyledModalFooter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;
  padding-top: 0.5rem;

  border-top: 1px solid ${colors.grey["1000"]};
`;
