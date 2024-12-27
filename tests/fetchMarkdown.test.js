import { describe, test, expect } from 'vitest';
import { fetchMarkdown } from '../fetchMarkdown.js';

describe('fetchMarkdown', () => {
  test('retrieves markdown from a valid URL', async () => {
    const result = await fetchMarkdown('https://example.com');
    expect(result).toContain('# Example Domain');
    expect(result).toContain('Example Domain');
    expect(result).toContain('This domain is for use in illustrative examples');
  });

  test('handles URLs with complex content', async () => {
    const result = await fetchMarkdown('https://playwright.dev');
    expect(result).toContain('Playwright');
    expect(result.length).toBeGreaterThan(0);
  });

  test('removes script and style elements from content', async () => {
    const result = await fetchMarkdown('https://example.com');
    expect(result).not.toContain('<script>');
    expect(result).not.toContain('<style>');
  });
});
