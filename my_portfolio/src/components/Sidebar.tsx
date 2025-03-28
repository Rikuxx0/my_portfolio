"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import Stack  from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import BadgeIcon from '@mui/icons-material/Badge';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';



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

      <Stack direction="row" spacing={2}>
        <Avatar
          alt="Riku Masukawa"
          src='/my_icon.jpg'
          sx={{ width: 120, height: 120, ml: 3}}
        />

        <Box
          sx={{
            width: '100%', // レスポンシブ対応
            maxWidth: 500, // 最大幅を設定
            height: 150, // 高さを適宜調整
            border: 'none',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
            <iframe
              src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1838215"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
              }}
            />
        </Box>
      </Stack>
      
      <Stack direction="column" spacing={1}>
        <Stack direction="row" spacing={2}>
          <Button href="https://github.com/Rikuxx0">
              <GitHubIcon />
          </Button>
        </Stack>

        <Box sx={{width: '100%', maxWidth: 500}}>
          <Typography variant="h4" align='center' gutterBottom>
              Hello Everyone 
          </Typography>
          <Typography variant="body1" align='center' gutterBottom>
              My name is Riku Masukawa. I'm Security geeker and work on various tools, software and pentration test. Nice to meet you.
          </Typography>
          <Typography variant="body1" align='center' gutterBottom>
              趣味でペンテスやWeb開発をしてます。現在は大学生です。
          </Typography>
          <Typography variant="body1" align='center' gutterBottom>
              目標はOSCP合格、情報安全確保支援士合格、CVEを発見することです。
          </Typography>
        </Box>
      </Stack>
      

      
    </div>
  );  

  
  return (
    <div>
      {/* ボタンをクリックするたびに開閉を切り替える */}
      <Button onClick={toggleDrawer} >
        <BadgeIcon sx={{ color: 'white' }} />
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

