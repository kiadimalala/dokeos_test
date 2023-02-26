import React from "react";
import styled from "styled-components";

interface LayoutProps {
  className?: string;
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ className, children }) => {
  return (
    <LayoutWrapper>
      <div>header</div>
      <div>{children && children}</div>
    </LayoutWrapper>
  );
};

const LayoutWrapper = styled.div``;

export default Layout;
