import { Toolbar } from "@app/components";
import React from "react";
import styled from "styled-components";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <LayoutWrapper>
      <Toolbar />
      <div>{children && children}</div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div``;

export default Layout;
