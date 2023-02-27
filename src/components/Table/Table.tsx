import { theme } from "@app/contants";
import React from "react";
import DataTable from "react-data-table-component";
import { IoChevronDown } from "react-icons/io5";
import styled from "styled-components";

import { Button } from "@app/components";

import { BsTrash } from "react-icons/bs";
import { GrSync } from "react-icons/gr";
import { MdCloudDownload } from "react-icons/md";

const ActionCell = () => {
  return (
    <StyledAction className="btn_container">
      <Button className="btn btn_download">
        <MdCloudDownload />
      </Button>
      <Button className="btn btn_refresh">
        <GrSync className="icon" />
      </Button>
      <Button className="btn btn_delete">
        <BsTrash />
      </Button>
    </StyledAction>
  );
};

export interface Column {
  name?: string;
  selector?: (row: any) => any;
  sortable?: boolean;
  cell?: (row: any) => React.ReactNode;
}

export const tableColumns: Column[] = [
  {
    name: "Nom du certificat",
    selector: (row: any) => row.certificat,
    sortable: true,
  },
  {
    name: "Apprenant",
    selector: (row: any) => row.student,
    sortable: true,
    cell: (row: any) => (
      <div dangerouslySetInnerHTML={{ __html: row.student }} />
    ),
  },
  {
    name: "Formation",
    selector: (row: any) => row.training,
    sortable: true,
  },
  {
    name: "Date de génération",
    selector: (row: any) => row.gen_date,
    sortable: true,
  },
  {
    name: "Date d'expiration",
    selector: (row: any) => row.expire_date,
    sortable: true,
  },
  {
    name: "Actions",
    selector: (row: any) => row.actions,
    sortable: true,
    cell: (row: any) => <ActionCell />,
  },
];

interface DataProps {
  id?: number;
  student?: React.ReactNode;
  certificat?: string;
  training?: string;
  gen_date?: string;
  expire_date?: string;
  actions?: React.ReactNode;
}

export const data: DataProps[] = [
  {
    id: 1,
    certificat: "Certificat Dokeos",
    student: "<p>Felix Vercouter</br>felix@vercouter.be</p>",
    training: "Guider ses équipes vers le succès",
    gen_date: "27/02/2023",
    expire_date: "28/02/2023",
    actions: "actions",
  },
  {
    id: 2,
    certificat: "Certificat Dokeos",
    student: "<p>Felix Vercouter</br>felix@vercouter.be</p>",
    training: "Guider ses équipes vers le succès",
    gen_date: "27/02/2023",
    expire_date: "28/02/2023",
    actions: "actions",
  },
  {
    id: 3,
    certificat: "Certificat Dokeos",
    student: "<p>Felix Vercouter</br>felix@vercouter.be</p>",
    training: "Guider ses équipes vers le succès",
    gen_date: "27/02/2023",
    expire_date: "28/02/2023",
    actions: "actions",
  },
];

const Table = () => {
  return (
    <StyledTable
      className="table"
      columns={tableColumns}
      data={data}
      //customStyles={customStyles}
      sortIcon={<IoChevronDown />}
    />
  );
};

const StyledAction = styled.div`
  &.btn_container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    .btn_download,
    .btn_refresh,
    .btn_delete {
      width: 17px;
      height: 17px;
      font-size: 15px;
      color: ${theme.color.gray_primary};
    }
    .btn_delete {
      color: ${theme.color.red};
    }
    .btn_refresh {
      transform: rotate3d(1, 1, 0, 180deg);
      .icon path {
        stroke: ${theme.color.gray_primary};
      }
    }
  }
`;

const StyledTable = styled(DataTable)`
  &.table {
    width: 100%;
    margin: 0 10px;
    div:first-child {
      display: flex;
      .rdt_Table .rdt_TableHead .rdt_TableHeadRow .rdt_TableCol {
        padding: 0;
        position: relative;
        margin-right: 5px;
        width: max-content;
        min-width: fit-content;
        .rdt_TableCol_Sortable {
          width: 100%;
          display: flex;
          margin-right: 5px;
          div {
            width: 100%;
            font-size: 12px;
            font-weight: 600;
            color: ${theme.color.gray_primary};
          }
          span {
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 10px;
            color: ${theme.color.gray_primary};
          }
        }
      }
      .rdt_Table .rdt_TableBody .rdt_TableRow .rdt_TableCell {
        padding: 0;
        position: relative;
        margin-right: 5px;
        div {
          word-wrap: break-word;
          white-space: pre-wrap;
          font-size: 12px;
          color: ${theme.color.gray_primary};
        }
      }
    }
  }
`;

export default Table;
