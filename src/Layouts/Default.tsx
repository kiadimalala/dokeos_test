import { Navigation, Toolbar } from "@app/components";
import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";
import { theme } from "../constants/index";
interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <LayoutWrapper className="default_layout">
      <Toolbar />
      <div className="main_view">
        <Navigation />
        <Outlet />
      </div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
  &.default_layout {
    height: 100% !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: ${theme.color.gray_secondary};
    .main_view {
      display: flex;
      height: 100% !important;
      
    }
  }
`;

export default Layout;
