import styled, { css } from "styled-components";
import { BasedTitle } from "./components/BasedTitle";
import { BasedText } from "./components/BasedText";
import { iTextStyleProps, iTilteStyleProps } from "./types";

export const StyledTitle = styled(BasedTitle)<iTilteStyleProps>`
  color: ${({ color }) => color};
  text-align: ${({ textAlign }) => textAlign};
  ${({ titleStyle }) => {
    switch (titleStyle) {
      default:
        return css`
          font-size: 1.8rem;
          font-weight: 700;
          line-height: 2.8rem;
        `;
      case "Title2":
        return css`
          font-size: 1.6rem;
          font-weight: 600;
          line-height: 2.6rem;
        `;
      case "Title3":
        return css`
          font-size: 1.4rem;
          font-weight: 700;
          line-height: 2.4rem;
        `;
    }
  }}
`;

export const StyledText = styled(BasedText)<iTextStyleProps>`
  color: ${({ color }) => color};
  align-self: ${({ alignSelf }) => alignSelf};
  text-align: ${({ textAlign }) => textAlign};
  ${({ textStyle }) => {
    switch (textStyle) {
      default:
        return css`
          font-size: 1.2rem;
          font-weight: 400;
          line-height: 2.2rem;
        `;
      case "HeadlineBold":
        return css`
          font-size: 1.2rem;
          font-weight: 700;
          line-height: 1.8rem;
        `;
      case "HeadlineItalic":
        return css`
          font-size: 1.2rem;
          font-weight: 400;
          font-style: italic;
          line-height: 1.8rem;
        `;
    }
  }}
`;
