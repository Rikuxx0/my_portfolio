"use client"
import * as React from 'react';
import Header from "../components/Header";
import Contact from '@/components/Contact';
import { Box, Typography, Container, List, ListItem, ListItemText, Stack } from "@mui/material";
import zIndex from '@mui/material/styles/zIndex';


const achievements = [
  "２週間オーストラリア語学留学",
  "CpawCTF - リバースエンジニアリング以外の全問クリア",
  "ACSC 参加",
  "SECCON Beginners CTF 2023 ワークショップ参加",
  "英検2級取得 (準1級CSEスコア 2186)",
  "セキュリティ・ミニキャンプ in 三重 2024 参加",
  "TryHackMe [GUARDIAN] - 世界2825位、日本50位 (2024年12月 日本1位獲得経験あり)",
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
  "....etc"

]
const projects = [
  "Python製インジェクション特化のファジングツール開発",
  "Rust製インジェクション特化のファジングツール開発",
  "HackComAPP 開発予定",
]



export default function Page () {
  return (
    <React.Fragment>
            {/*　動画の背景 */}   
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
            

              <Header />

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
              <Box sx={{ width: "100%", height: "4px", bgcolor: "black" }} />

              <Box sx={{ bgcolor: "black", color: "white", py: 6, }} id="skill">
                <Container>
                    <Typography variant="h4" sx={{ textAlign: "right", pr: 51 }} gutterBottom>
                      Skill
                    </Typography>
                    <Typography variant="h4" sx={{ textAlign: "right", pr: 36 }}>
                      Programing
                    </Typography>
                    <List>
                      {skills.map((skills, index) => (
                        <ListItem key={index}>
                          <ListItemText primary={skills}
                             sx={{ ml: 85 }}// 文字だけを右寄せ
                          />
                        </ListItem>
                      ))}
                    </List>
                </Container>
              </Box>

              {/* 黒線 */}
              <Box sx={{ width: "100%", height: "4px", bgcolor: "black" }} />

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
                        <Typography variant="h4" gutterBottom>
                          Contact
                        </Typography>
                        <Typography variant="h6">
                          お仕事があれば、お願い致します。
                        </Typography>
                      </Box>

                      {/* 右側にContactフォーム */}
                      <Box sx={{ width: "50%" }}>
                        <Contact />
                      </Box>
                    </Stack>
                  </Container>
              </Box>
     </React.Fragment>

  );
}

