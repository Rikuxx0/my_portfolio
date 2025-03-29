import { createTheme } from "@mui/material";

//カスタムテーマの作成
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,    // モバイル
      sm: 600,  // タブレット
      md: 960,  // 小型PC
      lg: 1280, // 大型PC
      xl: 1920, // 超大型PC
    },
  },
  
  palette: {
      primary : {
          main: "#2A2A2A"
      }
  }
});

export default theme;