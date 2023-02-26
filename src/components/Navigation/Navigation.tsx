import { theme } from "@app/contants";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import bookmark from "../../assets/icons/bookmark.svg";
import chart from "../../assets/icons/chart.svg";
import cube from "../../assets/icons/cube.svg";
import panel from "../../assets/icons/panel.svg";
import portals from "../../assets/icons/portals.svg";
import users from "../../assets/icons/users.svg";
import settings from "../../assets/icons/settings.svg";

interface LinkProps {
  className?: string;
  link?: any;
}

const ItemLink: React.FC<LinkProps> = ({ link, className }) => {
  return (
    <NavLink
      className={({ isActive }) =>
        !isActive && className ? `${className}` : `${className} active`
      }
      to={`/${link.link}`}
    >
      <div className="main_links">
        <div className="icon_container">
          <img className="icon" src={link.icon} alt="" />
        </div>
        <p>{link.name}</p>
      </div>

      {link?.children && (
        <div className="nested_link_list">
          {link?.children.map((item: any, index: any) => (
            <NavLink
              className={({ isActive }) =>
                !isActive ? `link_item` : `link_item active`
              }
              key={index}
              to={`/${item.link}`}
            >
              <span>{item.name}</span>
            </NavLink>
          ))}
        </div>
      )}
    </NavLink>
  );
};

const Navigation = () => {
  const links = [
    { icon: users, link: "utilisateurs", name: "Utilisateurs" },
    { icon: chart, link: "account-status", name: "Statut du compte" },
    { icon: bookmark, link: "training", name: "Formations" },
    { icon: cube, link: "modules", name: "Modules" },
    { icon: panel, link: "catalogs", name: "Catalogues" },
    {
      icon: settings,
      link: "settings",
      name: "Paramètres",
      children: [
        { link: "settings/edit-portal", name: "Personnalisation du portail" },
        {
          link: "settings/certificates",
          name: "Récapitulatif des certificats",
        },
      ],
    },
    { icon: portals, link: "portals", name: "Portails du partenaire" },
  ];

  return (
    <Wrapper className="navigation_wrapper">
      <div className="link_list">
        {links.map((link, index) => (
          <ItemLink key={index} className="link_item" link={link} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  &.navigation_wrapper {
    width: 196px;
    box-shadow: ${theme.shadow.md};
    min-height: 100vh;
    display: flex;
    justify-content: center;
    padding: 40px 0;
    .link_list {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: ${theme.color.gray_primary};
      width: 100%;
      justify-content: center;
      .link_item {
        width: 100%;
        display: flex;
        align-items: center;
        text-decoration: none;
        color: inherit;
        font-size: 12px;
        border-top: 1px solid #f2f2f2;
        .main_links {
          display: flex;
          padding: 10px 0;
          .icon_container {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-right: 10px;
            margin-left: 20px;
            .icon {
              font-size: 24px;
            }
          }
        }
      }

      .link_item:last-child {
        border-bottom: 1px solid #f2f2f2;
      }
      .link_item[href="/settings"] {
        display: flex;
        flex-direction: column;
        .main_links {
          width: 100%;
          border-bottom: 1px solid #f2f2f2;
          padding-bottom: 10px;
        }
        .nested_link_list {
          width: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          text-decoration: none;
          color: inherit;
          font-size: 12px;
          .link_item {
            position: relative;
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            text-decoration: none;
            color: inherit;
            font-size: 10px;
            border: none;
            padding: 10px 0 0 0;
            span {
              margin-left: 10px;
              white-space: pre-wrap;
              max-width: 50px;
            }
          }
          .link_item::before {
            content: "";
            min-width: 9px;
            height: 9px;
            border-radius: 20px;
            margin-left: 26px;
            background-color: ${theme.color.blue_secondary};
            z-index: 1;
          }
          .link_item:last-child::after {
            position: absolute;
            content: "";
            left: 28px;
            top: -72px;
            min-width: 5px;
            height: 40px;
            margin-top: 60px;
            background-color: ${theme.color.blue_secondary};
          }
        }
      }
      .link_item.active {
        .main_links {
          background-color: ${theme.color.blue_primary}!important;
          color: ${theme.color.white_primary};
          .icon_container {
            .icon {
              fill: white;
            }
          }
        }
        .nested_link_list {
          .link_item.active::before {
            background-color: ${theme.color.dark_blue};
          }
        }
      }
    }
  }
`;

export default Navigation;
