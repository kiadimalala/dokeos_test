import { Navigation, Toolbar } from "@app/components";
import React from "react";
import styled from "styled-components";

import { Outlet } from "react-router-dom";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <LayoutWrapper className="default">
      <Toolbar />
      <div className="main_view">
        <Navigation/>
        <Outlet />
      </div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div`
 &.default {
    .main_view {
      display: flex !important;
    }
  }
`;

export default Layout;
