import { Menu } from "antd";
import styled from "styled-components";
import { device } from "@/utils/device";

export const LinksMenu = styled(Menu)`
  && {
    display: none;
    border-bottom: none;
    background-color: transparent;
    margin-right: 10px;
    flex: auto;
    justify-content: end;
    @media ${device.md} {
      display: flex;
    }
  }
`;

export const MobileMenu = styled(Menu)`
  && {
    border-inline-end: none;
    background-color: transparent;
    &.ant-menu-light.ant-menu-vertical {
      border-inline-end: none;
    }
  }
`;
