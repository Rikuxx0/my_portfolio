"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Typography  from '@mui/material/Typography';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';


export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  // トグル（開いている場合は閉じ、閉じている場合は開く）
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const Drawerprofile = (
    <div>
      {/* ボタンをクリックするたびに開閉を切り替える */}
      <Button onClick={toggleDrawer}>
        <ArrowBackIosNewIcon />
      </Button>
      <Box>
        <Avatar
          alt="Riku Masukawa"
          src='/my_icon.jpg'
          sx={{ width: 100, height: 100 }}
        />
      </Box>
      <Box sx={{width: '100%', maxWidth: 500}}>
        <Typography variant="h4" gutterBottom>
            Hello Everyone 
        </Typography>
        <Typography variant="body1" gutterBottom>
            My name is Riku Masukawa. I'm Security geeker and work on various tools, software and pentration test. Nice to meet you.
        </Typography>
        <Typography variant="body1" gutterBottom>
            趣味でペンテスやWeb開発をしてます。現在は大学生です。
        </Typography>
      </Box>
      

      
    </div>
  );  

  
  return (
    <div>
      {/* ボタンをクリックするたびに開閉を切り替える */}
      <Button onClick={toggleDrawer}>
        <ArrowForwardIosIcon />
      </Button> 

      {/* DrawerのBackdropをカスタマイズして、背景が暗くならないようにする */}
      <Drawer 
            open={open} 
            onClose={toggleDrawer}
            // Backdropを透明に設定して背景を暗くしない
            hideBackdrop={true}
            ModalProps={{ keepMounted: true }} // UIのちらつきを防ぐ
            sx={{
                // サイドバーのスタイル設定
                '& .MuiDrawer-paper': {
                    height: 'calc(100% - 64px)', // ヘッダーの高さを差し引いた高さを設定
                    top: '64px', // ヘッダーがある位置に合わせる
                }
            }}
        >
            {Drawerprofile}
      </Drawer>
    </div>
  );
}

