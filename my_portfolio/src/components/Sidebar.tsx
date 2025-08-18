"use client"
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Drawer from '@mui/material/Drawer';
import { List, ListItem, ListItemText } from '@mui/material';
import Stack  from '@mui/material/Stack';
import Typography  from '@mui/material/Typography';
import BadgeIcon from '@mui/icons-material/Badge';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import GitHubIcon from '@mui/icons-material/GitHub';
import { SiNotion, SiWantedly, SiQiita } from "react-icons/si";



const interests = [
    "・Vulnerability Assessment",
    "・Exploit Development",
    "・Penetration test",
    "・Web Security",
    "・Web Development"
];


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
      </Stack>
      
      <Stack direction="column" spacing={1}>
        {/** SNSなどを登録する場所 */}
        <Stack direction="row" spacing={0.05}>
          <Button size="large" href="https://github.com/Rikuxx0">
              <GitHubIcon />
          </Button>
          <Button size="large" href='https://miniature-vegetable-567.notion.site/Riku-Masukawa-11f5269624928079a6dec2b9c2e9a088'>
              <SiNotion />
          </Button>
          <Button size="large" href='https://www.wantedly.com/id/Rikuxx00'>
              <SiWantedly />
          </Button>
          <Button size='large' href="https://qiita.com/rikum0730">
            <SiQiita />
          </Button>
        </Stack>


        
        <Box
          sx={{
            //TryHackMeのプロフィール
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
            <iframe src="https://tryhackme.com/api/v2/badges/public-profile?userPublicId=1838215"
             style={{
              border: 'none', 
              width: '100%', 
              height: '100px', // 適切な高さに調整
              maxWidth: '360px', // 最大幅を制限
              borderRadius: '8px' // 角丸デザイン
            }}
            ></iframe>
        </Box>

        <Box sx={{width: '100%', maxWidth: 580}}>
          <Typography variant="h4" align='center' gutterBottom>
              Hello Everyone 
          </Typography>
          <Typography variant="body1" align='center' gutterBottom>
              My name is Riku Masukawa. I'm Security Geeker and Web Programmer. I belong to Komazawa University and work on Programming and Pentration test.
          </Typography>
          <Typography variant="body1" align='center' gutterBottom>
              初めまして、大学でWeb開発、趣味でセキュリティを勉強してます。
          </Typography>
          <Typography variant="body1" align='center' gutterBottom>
              将来は、DevSecOpsエンジニア兼ペネトレーションテスターになりたいです。
          </Typography>
          <Typography variant="h4" align='center' gutterBottom>
            My Areas of Interest
          </Typography>
          <List sx={{ ml: '60px' }}>
            {interests.map((interests, index) => (
              <ListItem key={index}>
                  <ListItemText primary={interests} />
              </ListItem>
                ))}
            </List>

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
                    top: '74px', // ヘッダーがある位置に合わせる
                }
              }}
        >
            {Drawerprofile}
      </Drawer>
    </div>
  );
}

