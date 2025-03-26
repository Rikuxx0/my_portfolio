"use client";
import React, {useState} from "react";
import { Box, TextField, Button, Typography, Alert } from "@mui/material";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [status, setStatus] = useState({type: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus({type: "success", message: "Send email"});
                setFormData({name: "", email: "", message: "" });
            } else {
                setStatus({type: "error", message: "Failed sending email"});
            } 
        }
        catch (error) {
            setStatus({type: "error", message: "Sending ERROR"})
        }
    };


    return (
        
            <Box sx={{ maxWidth: 500, margin: "auto", p: 3, textAlign: "center"}}>
                {status.message && <Alert severity={status.type === "success" ? "success" : "error"}>{status.message}</Alert>}
                <form onClick={handleSubmit}>
                    <TextField fullWidth margin="normal" label="Name" name="name" value={formData.name} onChange={handleChange} sx={{bgcolor: "white", borderRadius: "5px", input: { color: "black "}}} required/>
                    <TextField fullWidth margin="normal" label="Email" name="email" value={formData.email} onChange={handleChange} sx={{bgcolor: "white", borderRadius: "5px", input: { color: "black "}}} required type="email" />
                    <TextField fullWidth margin="normal" label="Message" name="message" value={formData.message} onChange={handleChange} sx={{bgcolor: "white", borderRadius: "5px", input: { color: "black "}}} required multiline rows={4} />
                    <Button fullWidth type="submit" variant="contained" color="success" sx={{ mt: 2 }}>Send</Button>
                </form>
            </Box>
    
    );





















}