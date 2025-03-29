"use client"
import * as React from 'react';
import Header from "../components/Header";
import Contact from '@/components/Contact';
import { Box, Typography, Container, List, ListItem, ListItemText, Stack, CssBaseline } from "@mui/material";
import { ThemeProvider } from '@mui/material';
import { SiPython, SiTypescript, SiRust, SiHtml5, SiCss3, SiJavascript, SiGnubash, SiC, SiPhp, SiMysql, SiNextdotjs, SiNodedotjs, SiReact, SiMui, SiGithub, SiVite, SiWordpress, SiTryhackme ,SiHackthebox, SiKalilinux, SiApple, SiUbuntu } from "react-icons/si";
import { BiLogoVisualStudio, BiLogoWindows } from 'react-icons/bi';
import { FaAws } from 'react-icons/fa';
import { useMediaQuery, useTheme } from '@mui/material';
import customcolor from './theme/theme';


const achievements = [
  "２週間オーストラリア語学留学",
  "CpawCTF - リバースエンジニアリング以外の全問クリア",
  "ACSC 参加",
  "SECCON Beginners CTF 2023 ワークショップ参加",
  "英検2級取得 (準1級CSEスコア 2186)",
  "セキュリティ・ミニキャンプ in 三重 2024 参加",
  "TryHackMe [GUARDIAN] (世界で2780位(上位1%以下),日本で49位,2024年12月月間日本1位獲得,2025年3月日本Top50を獲得)",
  "駒澤大学グローバル・メディア・スタディーズ学部 入学予定 (2025年4月)"
];

const skills = [
  "Python",
  "TypeScript",
  "Rust",
  "Bash",
  "Assembly/C language",
  "PHP",
  "HTML/CSS",
  "SQL",
  "Various frameworks and security tools (Burp Suite, Nmap, Rustscan, Hydra, and so on......)"

]

// スキルとアイコンの対応リスト
const skillsWithIcons1 = [
  // プログラミング言語
  { icon: <SiPython size={60} color="#3776AB" />, name: "Python" },
  { icon: <SiTypescript size={60} color="#3178C6" />, name: "TypeScript" },
  { icon: <SiRust size={60} color="#000000" />, name: "Rust" }, // Rustの色は黒
  { icon: <SiHtml5 size={60} color="#E34F26" />, name: "HTML" },
  { icon: <SiCss3 size={60} color="#1572B6" />, name: "CSS" },
  { icon: <SiJavascript size={60} color="#F7DF1E" />, name: "JavaScript" },
  { icon: <SiGnubash size={60} color="#4EAA25" />, name: "Bash" },
    
];

const skillsWithIcons2 = [
  //プログラミング言語
  { icon: <SiC size={60} color="#A8B9CC" />, name: "C" },
  { icon: <SiPhp size={60} color="#777BB4" />, name: "PHP" },
  { icon: <SiMysql size={60} color="#4479A1" />, name: "SQL" },
  // フレームワーク
  { icon: <SiNextdotjs size={60} color="#000000" />, name: "Next.js" },
  { icon: <SiNodedotjs size={60} color="#339933" />, name: "Node.js" },

  // ライブラリ
  { icon: <SiReact size={60} color="#61DAFB" />, name: "React" },
  { icon: <SiMui size={60} color="#007FFF" />, name: "Material UI" },

  
];

const skillsWithIcons3 = [
  // 開発ツール
  { icon: <SiGithub size={60} color="#181717" />, name: "Git/GitHub" },
  { icon: <SiVite size={60} color="#646CFF" />, name: "Vite" },
  { icon: <BiLogoVisualStudio size={60} color="#5C2D91" />, name: "VSCode" },

  // その他
  { icon: <SiWordpress size={60} color="#21759B" />, name: "WordPress" },

  // セキュリティ関係
  { icon: <SiTryhackme size={60} color="#808080" />, name: "TryHackMe" }, // Hack The Boxのアイコンで代用
  { icon: <SiKalilinux size={60} color="#268BEE" />, name: "Kali Linux" },
  { icon: <BiLogoWindows size={60} color="#0078D6" />, name: "Windows" },
  
];

const skillsWithIcons4 = [
  //セキュリティ関係
  { icon: <SiApple size={60} color="#A2AAAD" />, name: "MacOS" },
  { icon: <SiUbuntu size={60} color="#E95420" />, name: "Ubuntu" },
  { icon: <FaAws size={60} color="#808080" />, name: "AWS"},
  { icon: <SiHackthebox size={60} color="#b8d200"/>, name: "Hackthebox"},
  { icon: <SiReact size={60} color="#87CEEB" />, name: "React"},
];



const projects = [
  "Python製インジェクション特化のファジングツール開発",
  "Rust製インジェクション特化のファジングツール開発",
  "HackComAPP 開発予定",
]



export default function Page () {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  
  return (
    <>
          {isMobile ? ( 
            //モバイル用
            <ThemeProvider theme={customcolor}>
              <CssBaseline />
                <Header />
              <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                }}
              >
              
                {/** 背景動画 */}
                <video
                  id='home'
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                  }}
                >
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  Your browser does not support th video tag.
                </video>

                {/**動画の上のテキスト */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textShadow: "1px 1px 1px rgba(141, 136, 136, 0.56), -2px -2px 3px rgba(52, 51, 51, 0.5), -2px 2px 3px rgba(49, 48, 48, 0.5), 2px -2px 3px rgba(29, 28, 28, 0.5)",
                    textAlign: "center",
                    zIndex: 1, //動画より前面に配置
                  }}
                  >
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 0}}>
                      Welcome to My Portfolio
                    </Typography>
                    <Typography variant="h5" >
                      Exploring Security & Development
                    </Typography>
                </Box>
              </Box>
              
              
        {/* 黒線 */}
        <Box sx={{ width: "100%", height: "0.5px", bgcolor: "#2A2A2A" }} />

              <Box sx={{ bgcolor: "white", color: "black", py: 3,  mr: 2 }} id="record">
                <Container>
                  <Box sx={{ p: 1 }}>
                    <Typography variant="h5" gutterBottom>
                      Record
                    </Typography>
                    <List>
                      {achievements.map((achievement, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={achievement}  />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Container>
              </Box>

  {/* 黒線 */}
  <Box sx={{ width: "100%", height: "4px", bgcolor: "#2A2A2A" }} />

              {/* Skill セクション */}
              <Box sx={{ bgcolor: "#2A2A2A", color: "white", py: 3 }} id="skill">
                <Container>
                  <Typography variant="h5" sx={{ textAlign: "left", mb: 4, mr: 2  }} gutterBottom>
                    Skill
                  </Typography>

                  {/* 横3列に分ける */}
                  <Stack direction="row" spacing={10} justifyContent="left">
                    {/* 1列目 */}
                    <Stack spacing={2} alignItems="left">
                      {skillsWithIcons1.slice(0, 6).map((skill, index) => (
                        <Box key={index} sx={{ textAlign: "left" }}>
                          {skill.icon}
                          
                        </Box>
                      ))}
                    </Stack>

                    {/* 2列目 */}
                    <Stack spacing={2} alignItems="center">
                      {skillsWithIcons2.slice(0, 6).map((skill, index) => (
                        <Box key={index} sx={{ textAlign: "center" }}>
                          {skill.icon}
                          
                        </Box>
                      ))}
                    </Stack>

                    {/* 3列目 */}
                    <Stack spacing={2} alignItems="right">
                      {skillsWithIcons3.slice(0, 6).map((skill, index) => (
                        <Box key={index} sx={{ textAlign: "right" }}>
                          {skill.icon}
                          
                        </Box>
                      ))}
                    </Stack>
                  </Stack>
                </Container>
              </Box>

  {/* 黒線 */}
  <Box sx={{ width: "100%", height: "4px", bgcolor: "black" }} />

              {/* Contact セクション（黒背景・白文字） */}
              <Box sx={{ bgcolor: "black", color: "white", py: 3, zIndex: -1}} id="contact">
                  <Container>
                    <Stack direction="column" spacing={4} alignItems="center" justifyContent="space-between">
                      {/* 左側にテキスト */}
                      <Box sx={{ width: "100%" }}>
                        <Typography variant="h5" gutterBottom>
                          Contact
                        </Typography>
                        <Typography variant="body1">
                          ご連絡があれば、ここにお願い致します。Gmailで送信されます。
                        </Typography>
                      </Box>

                      {/* 右側にContactフォーム */}
                      <Box sx={{ width: "100%" }}>
                        <Contact />
                      </Box>
                    </Stack>
                  </Container>
              </Box>
        </ThemeProvider>
          ) : ( 
        //デスクトップ用
        <ThemeProvider theme={customcolor}>
            <CssBaseline />
              <Header />
              <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                }}
              >
              
                {/** 背景動画 */}
                <video
                  id='home'
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    transform: "translate(-50%, -50%)",
                    zIndex: -1,
                  }}
                >
                  <source src="/videos/intro.mp4" type="video/mp4" />
                  Your browser does not support th video tag.
                </video>

                {/**動画の上のテキスト */}
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    color: "white",
                    textShadow: "1px 1px 1px rgba(141, 136, 136, 0.56), -2px -2px 3px rgba(52, 51, 51, 0.5), -2px 2px 3px rgba(49, 48, 48, 0.5), 2px -2px 3px rgba(29, 28, 28, 0.5)",
                    textAlign: "center",
                    zIndex: 1, //動画より前面に配置
                  }}
                  >
                    <Typography variant="h3" fontWeight="bold" sx={{ mt: 0}}>
                      Welcome to My Portfolio
                    </Typography>
                    <Typography variant="h5" >
                      Exploring Security & Development
                    </Typography>
                </Box>
              </Box>
              
              
              {/* 黒線 */}
              <Box sx={{ width: "100%", height: "0.5px", bgcolor: "#2A2A2A" }} />

              <Box sx={{ bgcolor: "white", color: "black", py: 6,  mr: 80}} id="record">
                <Container>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom>
                      Record
                    </Typography>
                    <List>
                      {achievements.map((achievement, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={achievement} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Container>
              </Box>

  {/* 黒線 */}
  <Box sx={{ width: "100%", height: "4px", bgcolor: "#2A2A2A" }} />

              <Box sx={{ bgcolor: "#2A2A2A", color: "white", py: 6 }} id="skill">
                <Container>
                  <Typography variant="h3" sx={{ textAlign: "right", mb: 4, mr: 60 }} gutterBottom>
                    Skill
                  </Typography>

                  {/* 左右に分けるためのStack */}
                  <Stack direction="row" spacing={2} justifyContent="space-between">
                  
                    {/* 左側：アイコンとスキル名 */}
                    <Box sx={{ flex: 0.5 }}>
                      <List>
                        {skillsWithIcons1.map((skill, index) => (
                          <ListItem key={index} >
                            <Stack direction="column" spacing={2} sx={{ alignItems: "center", width: "80px" }} >
                            {skill.icon} {/* アイコン */}
                            </Stack>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box sx={{ flex: 0.5 }}>
                      <List>
                        {skillsWithIcons2.map((skill, index) => (
                          <ListItem key={index}>
                            <Stack direction="column" spacing={2} sx={{ alignItems: "center", width: "80px"}} >
                              {skill.icon} {/* アイコン */}
                            </Stack>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box sx={{ flex: 0.5 }}>
                      <List>
                        {skillsWithIcons3.map((skill, index) => (
                          <ListItem key={index}>
                            <Stack direction="column" spacing={2} sx={{ alignItems: "center", width: "80px"}} >
                              {skill.icon} {/* アイコン */}
                            </Stack>
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box sx={{ flex: 1 }}>
                      <List>
                        {skillsWithIcons4.map((skill, index) => (
                          <ListItem key={index}>
                            <Stack direction="column" spacing={2} sx={{ alignItems: "center", width: "80px"}} >
                              {skill.icon} {/* アイコン */}
                            </Stack>
                          </ListItem>
                        ))}
                      </List>
                    </Box>

                    {/* 右側：説明とスキルリスト */}
                    <Box sx={{ flex: 0.5 }}>
                      <Typography variant="h3" sx={{ mr: 30}} gutterBottom>
                        Programming
                      </Typography>
                      <List >
                        {skills.map((skill, index) => (
                          <ListItem key={index} >
                            <ListItemText primary={skill} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                  </Stack>
                </Container>
              </Box>

  {/* 黒線 */}
  <Box sx={{ width: "100%", height: "4px", bgcolor: "#2A2A2A" }} />

              {/* Project セクション（白背景） */}
              <Box sx={{ bgcolor: "white", color: "black", py: 6, mr: 80 }} id="project">
                <Container>
                  <Box sx={{ p: 3 }}>
                    <Typography variant="h4" gutterBottom>
                      Project
                    </Typography>
                    <List>
                      {projects.map((projects, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={projects} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                </Container>
              </Box>

  {/* 黒線 */}
  <Box sx={{ width: "100%", height: "4px", bgcolor: "black" }} />

              {/* Contact セクション（黒背景・白文字） */}
              <Box sx={{ bgcolor: "black", color: "white", py: 6, zIndex: -1}} id="contact">
                  <Container>
                    <Stack direction="row" spacing={4} alignItems="center" justifyContent="space-between">
                      {/* 左側にテキスト */}
                      <Box sx={{ width: "40%" }}>
                        <Typography variant="h3" gutterBottom>
                          Contact
                        </Typography>
                        <Typography variant="h6">
                          ご連絡があれば、ここにお願い致します。Gmailで送信されます。
                        </Typography>
                      </Box>

                      {/* 右側にContactフォーム */}
                      <Box sx={{ width: "50%" }}>
                        <Contact />
                      </Box>
                    </Stack>
                  </Container>
              </Box>
        </ThemeProvider> )}
     </>

  );
}

