"use client"
import * as React from 'react';
import Button from '@mui/material/Button';
import { Drawer } from '@mui/material';

export default function Sidebar() {
  const [open, setOpen] = React.useState(false);

  // トグル（開いている場合は閉じ、閉じている場合は開く）
  const toggleDrawer = () => {
    setOpen((prev) => !prev);
  };

  const Drawerprofile = (
    <div>
        簡単なプロフィールを書くところ
    
     <Button onClick={toggleDrawer}>Close drawer</Button> 
    </div>
  );

  
  return (
    <div>
      {/* ボタンをクリックするたびに開閉を切り替える */}
      <Button onClick={toggleDrawer}>Open drawer</Button> 

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

