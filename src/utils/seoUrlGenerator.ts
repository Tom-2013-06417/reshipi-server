export function generateSEOUrl(title: string): string {
  const formattedTitle = title.toLowerCase().replace(/\s+/g, '-');
  const seoUrl = formattedTitle.replace(/[^a-z0-9-]/g, '');
  return seoUrl;
}

export function generateSEOUrlWithDate(title: string): string {
  const formattedTitle = generateSEOUrl(title);
  const date = new Date();
  const year = date.getFullYear();
  let month = (date.getMonth() + 1).toString(); // JavaScript months are 0-indexed
  month = month.padStart(2, '0');

  return `/${year}/${month}/${formattedTitle}`;
}

export default generateSEOUrl;
