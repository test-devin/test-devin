import { chromium } from 'playwright';

export async function fetchMarkdown(url) {
  // 1. Launch the browser
  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    // 2. Navigate to the specified URL
    await page.goto(url, { waitUntil: 'networkidle' });
    
    // 3. Extract the HTML content
    const content = await page.content();

    // 4. Basic HTML to Markdown conversion
    // For now, we'll do a simple conversion of the main content
    // We could add a more sophisticated HTML-to-Markdown library later if needed
    const title = await page.title();
    const bodyText = await page.evaluate(() => {
      // Remove script and style elements
      const scripts = document.querySelectorAll('script, style');
      scripts.forEach(script => script.remove());
      
      // Get text content with basic formatting
      return document.body.innerText;
    });

    // 5. Format as markdown
    const markdown = `# ${title}\n\n${bodyText}`;
    
    return markdown;
  } finally {
    // 6. Always close the browser
    await browser.close();
  }
}
