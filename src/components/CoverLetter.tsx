import React from "react";
import { Box, Typography, Paper, Divider, Stack } from "@mui/material";
import {
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  GitHub,
} from "@mui/icons-material";
import { useLanguage } from "../context/LanguageContext";

const CoverLetter: React.FC = () => {
  const { resumeData } = useLanguage();
  const contact = resumeData.contact;
  const coverLetter = resumeData.coverLetter;

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "1150px",
        aspectRatio: "210/297",
        background: "#fff",
        padding: 2,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "0.9rem",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "100%",
          px: { xs: 2, sm: 18 },
          py: { xs: 4, sm: 12 },
          borderRadius: 0,
          boxShadow: "none",
          background: "#fff",
          display: "flex",
          flexDirection: "column",
        }}
        elevation={0}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              mb: 8,
            }}
          >
            <Box>
              <Box sx={{ mt: 4, mb: 4 }}>
                <Typography variant="body1">
                  {coverLetter.recipient.company.split('\n').map((line, i) => (
                    <span key={i}>
                      {line}
                      {i < coverLetter.recipient.company.split('\n').length - 1 && <br />}
                    </span>
                  ))}
                  <br />
                  {coverLetter.recipient.name}
                  <br />
                  {coverLetter.recipient.address.street}
                  <br />
                  {coverLetter.recipient.address.postalCode}{" "}
                  {coverLetter.recipient.address.city}
                </Typography>
              </Box>
            </Box>

            <Box sx={{ textAlign: "left", minWidth: 220, borderRadius: 2 }}>
              <Stack spacing={1} sx={{ mt: 2 }}>
                <Box>
                  <Typography variant="body2" sx={{ fontWeight: 600, fontSize: "1.1rem" }}>
                    {resumeData.name}
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Email fontSize="small" />
                  <Typography variant="body2">{contact.email.label}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <Phone fontSize="small" />
                  <Typography variant="body2">{contact.phone.label}</Typography>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                  <LocationOn fontSize="small" />
                  <Typography variant="body2">
                    {contact.location.label}
                  </Typography>
                </Box>
                {contact.linkedin && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <LinkedIn fontSize="small" />
                    <Typography variant="body2">
                      {contact.linkedin.label}
                    </Typography>
                  </Box>
                )}
                {contact.github && (
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <GitHub fontSize="small" />
                    <Typography variant="body2">
                      {contact.github.label}
                    </Typography>
                  </Box>
                )}
              </Stack>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 600,
                color: "rgba(0,0,0,0.85)",
                fontSize: "1.15rem",
                letterSpacing: 0.2,
                textAlign: "left",
              }}
            >
              {coverLetter.title}
            </Typography>
            <Typography
              variant="body1"
              sx={{ color: "rgba(0,0,0,0.7)", textAlign: "right" }}
            >
              {coverLetter.date}
            </Typography>
          </Box>
          <Divider sx={{ my: 3, borderColor: "#2196f3" }} />
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "rgba(0,0,0,0.87)", mb: 5 }}
          >
            {coverLetter.greeting},
          </Typography>
          <Typography
            variant="body1"
            paragraph
            sx={{ color: "rgba(0,0,0,0.87)", mb: 5 }}
          >
            {coverLetter.mainText.split('\n').map((line, i) => (
              <span key={i}>
                {line}
                {i < coverLetter.mainText.split('\n').length - 1 && <br />}
              </span>
            ))}
          </Typography>
        </Box>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.87)" }}>
            {coverLetter.closing},
          </Typography>
          <Box sx={{ height: 60 }} />
          <Typography variant="body1" sx={{ color: "rgba(0,0,0,0.87)" }}>
            {resumeData.name}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default CoverLetter;
