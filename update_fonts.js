const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(function(file) {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('d:/Techfleek/nirmal-seeds/src/features');
let numMatched = 0;

files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  
  // Also we need to modify text color, removing text-[#444], text-[#555], text-gray-500, text-gray-600, etc.
  let newContent = content.replace(/<p([^>]*)className=["']([^"']*)["']/g, (match, p1, p2) => {
    let classes = p2.split(/\s+/).filter(Boolean);
    
    // Remove existing font weights
    classes = classes.filter(c => !c.startsWith('font-'));
    // Remove light gray colors
    classes = classes.filter(c => !['text-[#444]', 'text-[#555]', 'text-gray-500', 'text-gray-600'].includes(c));
    // Remove duplicate text-[#222], text-[#333] just in case we add it
    classes = classes.filter(c => !['text-[#222]', 'text-[#333]', 'text-[#111]'].includes(c));
    
    // Add font-medium
    classes.push('font-medium');
    // Add darker text color for better contrast
    classes.push('text-[#222]');
    
    return `<p${p1}className="${classes.join(' ')}"`;
  });
  
  // Also the user has paragraphs rendered dangerouslySetInnerHTML which might be in div or p tags without className, but look for QA Content
  if (content !== newContent) {
    fs.writeFileSync(f, newContent, 'utf8');
    console.log('Updated', f);
    numMatched++;
  }
});
console.log('Total files updated:', numMatched);
