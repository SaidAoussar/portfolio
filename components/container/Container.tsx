import { ReactNode } from "react";
import styled from "styled-components";
import { device } from "@/utils/device";

type ContainerProps = {
  children: ReactNode;
};

const StyledContainer = styled.div`
  padding-left: 15px;
  padding-right: 15px;
  margin-left: auto;
  margin-right: auto;

  @media ${device.sm} {
    max-width: 540px;
  }

  @media ${device.md} {
    max-width: 720px;
  }

  @media ${device.lg} {
    max-width: 960px;
  }

  @media ${device.xl} {
    max-width: 1140px;
  }

  @media ${device.xxl} {
    max-width: 1320px;
  }
`;

const Container = ({ children }: ContainerProps) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
