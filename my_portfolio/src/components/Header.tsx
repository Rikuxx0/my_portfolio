"use client";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Sidebar from './Sidebar';
import { useTheme } from '@mui/material';
import { useMediaQuery } from '@mui/material';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }
  
  const drawerWidth = 240;
  const navItems = [
    {label: "Home", id: "home"},
    {label: "Record", id: "record"},
    {label: "Skill", id: "skill"},
    {label: "Project", id: "project"},
    {label: "Contact", id: "contact"},
  ]


  export default function Header(props: Props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // モバイル判定

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    // セクションへスクロールする関数
    const scrollToSection = (id: string) => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    };
    
    const drawer = (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography variant="h6" sx={{ my: 2 }}>
          MUI
        </Typography>
        <Divider />
        <List>
          {navItems.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton onClick={() => scrollToSection(item.id)} sx={{ textAlign: 'center' }}>
                  <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    );
  
    const container = window !== undefined ? () => window().document.body : undefined;
  
    return (
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar 
          component="nav" 
          color='primary'
          sx={{ 
            maxWidth: "100%", 
            px: 4,
            py: 2,
            margin: "auto",
          }}
        > 
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { sm: 'none' } }}
            >
              <Sidebar />
            </IconButton>
          
            <Typography
              variant="h6" 
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
            >
              <Sidebar />
            </Typography>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              {navItems.map((item) => (
                <Button  variant="text" key={item.id} sx={{ color: '#fff', fontFamily: "system-ui" }} onClick={() => scrollToSection(item.id)}>
                  {item.label}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </AppBar>


        <nav>
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: 'block', sm: 'none' },
              '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            }}
          >
            {drawer}
          </Drawer>
        </nav>
      </Box>
    );
  }

