export function generateSEOUrl(title: string): string {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  const seoUrl = formattedTitle.replace(/[^a-z0-9-]/g, '');
  return seoUrl;
}

export default generateSEOUrl;
