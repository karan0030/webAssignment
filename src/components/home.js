import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import EnhancedTable from "./Table/table";
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import { blue } from "@material-ui/core/colors";
import CardS from "./Cards/CardS"
import ProfileLogo from "./Avatars/Avatar"
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import RemoveRoundedIcon from '@material-ui/icons/RemoveRounded';
import SimpleTabs from "./Tabs/tabs"
import "./Line/line.css"
import "./LeftMenu/leftmenu.css"
const drawerWidth = 150;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor:"#FFFFFF",
    color:"#1E60DC",
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
    color:"#D3D3D3"

  },
  hide: {
    display: "none",
  },
  drawer: {
    backgroundColor:"#1E60DC",
    color:"#1E60DC",
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    
  },
  drawerOpen: {
    backgroundColor:"#1E60DC",
    
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    backgroundColor:"#1E60DC",
    
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }, 
  toolbarButtons: {
    marginLeft: 'auto',
    marginRight:0
  },
  line:{
    transform: "rotate(-90deg)",
    

  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  h6:{
    fontWeight:800 ,
    marginLeft:2,
    
  },
  
  
  listItem:{
    
    marginRight:5,
    marginTop:20,
    paddingTop:15,
    
    
  }
}));

export default function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={clsx(classes.h6)} noWrap>
            SHAHI
          </Typography>
           <div className={classes.toolbarButtons}>
           <IconButton color="#D3D3D3"><SettingsOutlinedIcon /></IconButton>
           <IconButton ><div class="line" /></IconButton>
           <IconButton ><ProfileLogo/></IconButton>
          
          </div>
         
          
        </Toolbar>
      </AppBar>
      <Drawer
        
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
        
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        
        <List style={{color:"#E5E4E2"}}>
        <ListItem class="li" >
          <HomeOutlinedIcon/>
        </ListItem>
        <ListItem class="li">
          <DashboardOutlinedIcon/>
        </ListItem>
        <ListItem class="li">
          <DescriptionOutlinedIcon/>
        </ListItem>
        <ListItem class="li">
          <NotificationsNoneOutlinedIcon/>
        </ListItem>
        <ListItem class="li">
          <HelpOutlineOutlinedIcon/>
        </ListItem>
          
        </List>
        
        
      </Drawer>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <CardS/>
        <SimpleTabs/>
      </main>
    </div>
  );
}
