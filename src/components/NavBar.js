import React from 'react'
import { Button, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { Link } from 'react-router-dom'


const headersData = [
    {
        label: "Home",
        href: "/",
      },
    {
      label: "Nintendo",
      href: "/nintendo",
    },
    {
      label: "PC",
      href: "/pc",
    },
    {
      label: "Playstation",
      href: "/playstation",
    },
    {
      label: "Xbox",
      href: "/xbox",
    },
  ];


const useStyles = makeStyles(() => ({
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        padding: 0
    },
    menuButton: {
        fontFamily: "Open Sans, sans-serif",
        fontWeight: 700,
        size: "18px",
        marginLeft: "38px",
     },
    header: {
      backgroundColor: "#1A2B23",
      boxShadow: "-2px 12px 14px 0px rgba(0,0,0,0.89)",
      padding: "0px 90px 0px 90px"
    },
    logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#FFFEFE",
      textAlign: "left",
    },
  }));

const NavBar = () => {
    const {header, logo, menuButton, toolbar} = useStyles();
    const getMenuButtons = () => {
        return headersData.map(({ label, href }) => {
          return (
            <Button
              {...{
                key: label,
                color: "inherit",
                to: href,
                component: Link,
                className: menuButton
              }}
            >
              {label}
            </Button>
          );
        });
      };
    const titleLogo = (<Typography variant="h6" component="h1" className={logo}>GameReview</Typography>)
    const display= () => {return <Toolbar className={toolbar}>{titleLogo}<div>{getMenuButtons()}</div></Toolbar>}
    return (
            <AppBar className={header}>{display()}</AppBar>
        
            
       
    )
}

export default NavBar
