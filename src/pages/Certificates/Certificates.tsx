import { TableContainer, FilterSystem } from "@app/components";
import React, { useState } from "react";
import styled from "styled-components";

const Certificates = () => {
  const [openFilter, setOpenFilter] = useState<boolean>(false);

  const updateFilter = (state: boolean) => {
    setOpenFilter(state);
  };
  return (
    <Wrapper className="page_wrapper">
      <h1 className="page_title">Mes Cerificats</h1>
      <TableContainer openFilter={updateFilter} />
      <FilterSystem open={openFilter} closeFilter={updateFilter} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.page_wrapper {
    height: 100% !important;
    .page_title {
      font-size: 28px;
      margin: 30px 98px;
    }
  }
`;

export default Certificates;
