import styled, { css } from "styled-components";
import theme from "../../../utils/constants/theme";

const StyledButton = styled.button`
  background-color: ${(props) => theme.colors[props.$variant] || theme.colors.primary};
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: ${(props) => theme.buttonSizes[props.$size].fontSize};
  padding: ${(props) => theme.buttonSizes[props.$size].padding};
  cursor: pointer;

  ${(props) =>
    props.$full &&
    css`
      width: 100%;
    `}

  &:hover {
    opacity: 0.8;
  }
`;

function Button({ variant = "primary", size = "md", full, children, ...rest }) {
  return (
    <StyledButton $variant={variant} $size={size} $full={full} {...rest}>
      {children}
    </StyledButton>
  );
}

export default Button;
