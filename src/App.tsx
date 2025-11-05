import { Button, Container, CssBaseline, ThemeProvider, createTheme, ButtonGroup } from '@mui/material';
import { usePDF } from 'react-to-pdf';
import Resume from './components/Resume';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import CoverLetter from './components/CoverLetter';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2196f3',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

function AppContent() {
  const { language, setLanguage, resumeData } = useLanguage();
  const location = useLocation();
  
  const { toPDF: toPDFResume, targetRef: resumeRef } = usePDF({
    filename: language === 'de' ? 'lebenslauf.pdf' : 'resume.pdf',
    page: { format: 'a4', orientation: 'portrait' }
  });
  
  const { toPDF: toPDFCoverLetter, targetRef: coverLetterRef } = usePDF({
    filename: language === 'de' ? 'anschreiben.pdf' : 'cover-letter.pdf',
    page: { format: 'a4', orientation: 'portrait' }
  });

  const handleDownload = () => {
    if (location.pathname === '/cover-letter') {
      toPDFCoverLetter();
    } else {
      toPDFResume();
    }
  };

  return (
    <Container sx={{ py: 4, backgroundColor: "#bdbdbd", minHeight: "100vh" }}>
      <ButtonGroup sx={{ mb: 2, mr: 2 }}>
        <Button
          variant={language === 'de' ? 'contained' : 'outlined'}
          onClick={() => setLanguage('de')}
        >
          DE
        </Button>
        <Button
          variant={language === 'en' ? 'contained' : 'outlined'}
          onClick={() => setLanguage('en')}
        >
          EN
        </Button>
      </ButtonGroup>
      <Button
        variant="contained"
        onClick={handleDownload}
        sx={{ mb: 2, mr: 2 }}
      >
        Download
      </Button>
      <Button component={Link} to="/cv" sx={{ mb: 2, mr: 2 }}>
        {language === 'de' ? 'Lebenslauf' : 'Resume'}
      </Button>
      <Button component={Link} to="/cover-letter" sx={{ mb: 2 }}>
        {language === 'de' ? 'Anschreiben' : 'Cover Letter'}
      </Button>
      <Routes>
        <Route path="/" element={<Navigate to="/cv" replace />} />
        <Route path="/cv" element={<div ref={resumeRef}><Resume data={resumeData} /></div>} />
        <Route path="/cover-letter" element={<div ref={coverLetterRef}><CoverLetter /></div>} />
      </Routes>
    </Container>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <LanguageProvider>
        <Router>
          <AppContent />
        </Router>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
