import styled from "styled-components";
import { Layout } from "antd";

const { Content: ContentAnt } = Layout;

type ContentProps = {
  $bgColor: string;
};

export const Content = styled(ContentAnt)<ContentProps>`
  && {
    background-color: ${(props) => props.$bgColor};
    padding: 48px 0px;
  }
`;
