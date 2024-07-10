import { IconType } from "react-icons";

import { ButtonContainer, StyledNextLink } from "./styles";
import { ButtonVariantT } from "./types";

interface ButtonProps {
  title?: string;
  icon?: IconType;
  onClick?: () => void;
  variant?: ButtonVariantT;
  isLink?: boolean;
  href?: string;
  type?: "submit" | "reset" | "button" | undefined;
}
export function Button({
  title,
  icon: Icon,
  onClick,
  variant = "primary",
  isLink = false,
  href = "",
  type,
}: ButtonProps) {
  if (isLink) {
    return <StyledNextLink href={href}>{title}</StyledNextLink>;
  }

  return (
    <ButtonContainer variant={variant} onClick={onClick} type={type}>
      {Icon && <Icon data-testid={"button-icon"} />}
      {title}
    </ButtonContainer>
  );
}
