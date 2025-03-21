import * as React from 'react';
import Header from "../components/Header";
import Sidebar from "@/components/Sidebar";
import { Box, Typography, Container, List, ListItem, ListItemText, Paper} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';

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
    <div>
      <React.Fragment>
        <Box sx={{
            mt: 10
        }}
        >
            <Sidebar />
        </Box>
        <Header />
        <CssBaseline />
        <Container fixed>
            <Box sx={{ bgcolor: '#cfe8fc', height: '100vh',  width: '150vh' }} />
        </Container>






        <Container maxWidth="md" sx={{ mt: 4 }}>
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
    </div>
  );
}

