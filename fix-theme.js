const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx') && f !== 'Header.tsx'); // Header already done

const replacements = [
  { regex: /\bbg-slate-950\b/g, replacement: 'bg-slate-50 dark:bg-slate-950' },
  { regex: /\bbg-slate-900\b/g, replacement: 'bg-white dark:bg-slate-900' },
  { regex: /\btext-white\b/g, replacement: 'text-slate-900 dark:text-white' },
  { regex: /\btext-slate-300\b/g, replacement: 'text-slate-600 dark:text-slate-300' },
  { regex: /\btext-slate-400\b/g, replacement: 'text-slate-500 dark:text-slate-400' },
  { regex: /\bborder-slate-800\b/g, replacement: 'border-slate-200 dark:border-slate-800' },
  { regex: /\bborder-slate-700\b/g, replacement: 'border-slate-300 dark:border-slate-700' },
  { regex: /\bborder-t border-slate-800\b/g, replacement: 'border-t border-slate-200 dark:border-slate-800' }
];

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let originalContent = content;

  // Need to be careful with border-t border-slate-800 since it might get replaced twice if not ordered properly
  // but regex uses word boundaries so it's mostly fine.

  for (const r of replacements) {
    content = content.replace(r.regex, r.replacement);
  }

  // To prevent double replacements if run multiple times, maybe don't run if already has 'dark:bg-'
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Updated ${file}`);
  }
}
