# Changelog

## Initial code review, bugfix, and feature update (July 24, 2025)
- Replaced Gemini API with integrated OpenAI API functions for all AI-powered features (workout generator, blog helper)
- Implemented secure API key handling using environment variables; removed hard-coded keys
- Added lazy loading (`loading="lazy"`) for all images for improved performance
- Improved accessibility: image `alt` text, ARIA labels, better color contrasts
- Enhanced mobile responsiveness (fixed min-widths, testing grid breakpoints)
- Reviewed, edited, and suggested new blog content topics & metadata for SEO
- Added error handling for API calls throughout
- Improved scroll animations stability
- Better prompt engineering for AI queries
- Created Google Drive folder structure: Website, BlogContent, Changelog
- Committed updates to GitHub in descriptive, organized commits

## Recommendations/Next Steps
- Add real-time analytics dashboards
- Implement user logins with JWT/auth
- Expand blog editor with SEO assistant
- Further optimize Lighthouse performance score
- Expand tests for accessibility (a11y)

---
See repo README for full documentation of features and structure.