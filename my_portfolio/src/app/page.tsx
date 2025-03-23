import * as React from 'react';
import Header from "../components/Header";
import { Box, Typography, Container, List, ListItem, ListItemText, Paper} from "@mui/material";


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
  "Programing",
  "Python/TypeScript/Bash/Rust/SQL/PHP ....etc"
];

const projects = [
  "Python製インジェクション特化のファジングツール開発",
  "Rust製インジェクション特化のファジングツール開発",
  "HackComAPP 開発予定",
]



export default function Page () {
  return (
      <React.Fragment>
            {/*　動画の背景 */}   {/**id入れ　→ 動画が小さくなるも問題あり */}
            <Container>
              <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "100vh",
                }}
              >
              
                {/** 背景動画 */}
                <video
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
              </Box>
            </Container>

              <Header />

              <Container maxWidth="md" sx={{ mt: 4}}>
                <Paper sx={{ p: 3 }}>
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
                </Paper>
              </Container>

              <Container maxWidth="md" sx={{ mt: 4 }}>
                <Paper sx={{ p: 3 }}>
                  <Typography variant="h4" gutterBottom>
                    Skill
                  </Typography>
                  <List>
                    {skills.map((skills, index) => (
                      <ListItem key={index}>
                        <ListItemText primary={skills} />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Container>

              <Container maxWidth="md" sx={{ mt: 4 }}>
                <Paper sx={{ p: 3 }}>
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
                </Paper>
              </Container>
            
          
      
      </React.Fragment>
  
  );
}

