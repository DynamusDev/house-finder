import React, { useEffect, useState } from "react";
import {
  StyledModalBody,
  StyledModalContent,
  StyledModalFooter,
  StyledModalHeader,
  StyledModalOverlay,
  StyledModalTitle,
} from "./styles";
import { Button } from "../Button";

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function Modal({ children, title, onClose, isOpen }: ModalProps) {
  const [isModalOpen, setIsModalOpen] = useState(isOpen);

  useEffect(() => {
    setIsModalOpen(isOpen);
  }, [isOpen]);

  if (!isModalOpen) return;

  return (
    <StyledModalOverlay onClick={onClose}>
      <StyledModalContent>
        <StyledModalHeader>
          <StyledModalTitle>{title}</StyledModalTitle>
          <StyledModalBody>{children}</StyledModalBody>
          <StyledModalFooter>
            <Button title="Close" onClick={onClose} />
          </StyledModalFooter>
        </StyledModalHeader>
      </StyledModalContent>
    </StyledModalOverlay>
  );
}
