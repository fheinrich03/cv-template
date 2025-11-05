# CV & Cover Letter Template

This React project creates a professional-looking CV and Cover Letter
from the data you input.

## 📄 Enter Your CV & Cover Letter Information

-   **CV & Cover Letter Data**: Enter your CV and cover letter data in
    `german.ts` and `english.ts`.
-   **Institution Logos**: Place images for your work and education
    institutions in the `assets/` folder and map them in the
    `getCompanyLogo()` function inside `Timeline.tsx`.
-   **Profile Picture**: Add your profile picture in the `public/assets/`
    folder and reference it in the `Sidebar.tsx` component

## 🚀 Running the Project

``` bash
npm install   # Install dependencies
npm start     # Run the project
# Open http://localhost:3000 to view it in your browser
```

## 🔗 Adding Hyperlinks to PDF

After exporting your resume as a PDF, you can optionally add hyperlinks
to your contact information using
[PDFescape](https://www.pdfescape.com/), a free online PDF editor.

### Steps:

1.  Upload your exported PDF.
2.  Add clickable links to your email, phone number, location, LinkedIn,
    and GitHub.
3.  Save the modified PDF with all hyperlinks intact.

This gives you a clean, professional PDF export while maintaining
interactive elements in the final document.
