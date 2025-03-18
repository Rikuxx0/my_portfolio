import Header from "../components/Header"
import Sidebar from "@/components/Sidebar";
import { Box } from "@mui/material";

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
        
    </div>
  );
}

