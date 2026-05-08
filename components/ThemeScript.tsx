'use client'

export default function ThemeScript() {
  const script = `
    (function() {
      var saved = localStorage.getItem('ff-theme') || 'dark';
      document.documentElement.setAttribute('data-theme', saved);
    })();
  `
  return <script dangerouslySetInnerHTML={{ __html: script }} />
}
