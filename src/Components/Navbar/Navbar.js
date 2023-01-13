import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import NavbarConfig from "../../configs/NavbarConfig";
import NavBarIcon from "./NavbarIcon";
import "./Navbar.css";

function Navbar() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <>
      {isDesktop ? (
        <Box
          sx={{
            backgroundColor: "#FEFEFE",
            display: "flex",
            position: "sticky",
            flexDirection: "row",
            width: "100%",
            height: "80px",
            justifyContent: "space-between",
            boxShadow: `6px 0px 19px -7px ${theme.color.black30}`,
            zIndex: 99,
          }}
        >
          <Box
            key={3}
            sx={{
              height: "fit-content",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            {NavbarConfig.map(
              (item) =>
                item.is_top && (
                  <NavBarIcon
                    key={item.name}
                    name={item.name}
                    is_page_active={item.is_page_active}
                    icon_path={item.icon_path}
                    nav_to={item.nav_to}
                  />
                )
            )}
          </Box>
          <Box
            key={2}
            sx={{
              height: "fit-content",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              marginBottom: "64px",
            }}
          >
            {NavbarConfig.map(
              (item) =>
                !item.is_top && (
                  <NavBarIcon
                    key={item.name}
                    name={item.name}
                    is_page_active={item.is_page_active}
                    icon_path={item.icon_path}
                    nav_to={item.nav_to}
                  />
                )
            )}
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            backgroundColor: "#FEFEFE",
            display: "flex",
            position: "fixed",
            flexDirection: "row",
            width: "100%",
            height: "80px",
            justifyContent: "space-around",
            bottom: "0px",
            zIndex: 2,
          }}
        >
          {NavbarConfig.map(
            (item) =>
              item?.is_mobile && (
                <NavBarIcon
                  key={item.name}
                  name={item.name}
                  is_page_active={item.is_page_active}
                  icon_path={item.icon_path}
                  nav_to={item.nav_to}
                />
              )
          )}
        </Box>
      )}
    </>
  );
}

export default Navbar;
