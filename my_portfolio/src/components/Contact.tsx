"use client";
import React, {useState} from "react";
import { Box, TextField, Button, Alert } from "@mui/material";

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setResponse("");

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });

        const data = await res.json();
        setResponse(data.success || data.error);
        setLoading(false);
    };

    return (
       
        <Box component="form" onSubmit={handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: 400, mx: "auto" }}>
            {response && <Alert severity={response.includes("Failed") ? "error" : "success"}>{response}</Alert>}
            <TextField name="name" label="Your Name" onChange={handleChange} sx={{bgcolor: "white", borderRadius: "5px", input: { color: "black "}}} required fullWidth />
            <TextField name="email" type="email" label="Your Email" onChange={handleChange} sx={{bgcolor: "white", borderRadius: "5px", input: { color: "black "}}} required fullWidth />
            <TextField name="message" label="Your Message" multiline rows={4} onChange={handleChange} sx={{bgcolor: "white", borderRadius: "5px", input: { color: "black "}}} required fullWidth />
            <Button type="submit" variant="contained" color="success" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
            </Button>
            
        </Box>
    );
    
}