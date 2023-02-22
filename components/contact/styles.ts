import styled from "styled-components";

type ContentProps = {
  $bgColor: string;
};

export const Section = styled.section<ContentProps>`
  && {
    background-color: ${(props) => props.$bgColor};
    padding: 48px 0px;
    scroll-margin-top: 64px;
  }
`;
