import Header from "../components/Header"
import Sidebar from "@/components/Sidebar";
import { Box, Typography, Container, List, ListItem, ListItemText, Paper} from "@mui/material";

const achievements = [
  "TryHackMe [GUARDIAN] - 世界2825位、日本50位 (2024年12月 日本1位獲得経験あり)",
  "CpawCTF - リバースエンジニアリング以外の全問クリア",
  "ACSC 参加",
  "SECCON Beginners CTF 2023 ワークショップ参加",
  "セキュリティ・ミニキャンプ in 三重 2024 参加",
  "Python製インジェクション特化のファジングツール開発",
  "Rust製インジェクション特化のファジングツール開発",
  "HackComAPP 開発予定",
  "英検2級取得 (準1級CSEスコア 2186)",
  "2週間オーストラリア語学留学",
  "駒澤大学グローバル・メディア・スタディーズ学部 入学予定 (2025年4月)"
];

const skills = [

];

const projects = [

]



export default function Page () {
  return (
    <div>
        <Box sx={{
            mt: 10
        }}
        >
            <Sidebar />
        </Box>
        <Header />







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
        
        
    </div>
  );
}

