build instructions:

craft new file index-new.html containing

- inline content from index.html (preserve UTF-8 characters)
- embed styles.css into a <style> block
- embed all scenario*.js modules inline (replace exports with const definitions)
- inline favicon.svg as base64 data URI
- strip all HTML/CSS/JS comments before embedding, remove empty lines

Our Goal:
We want to have just one file request per user!