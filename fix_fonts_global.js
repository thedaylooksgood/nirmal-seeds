const fs = require('fs');
const path = require('path');

function walk(d) {
    let r = [];
    const list = fs.readdirSync(d);
    list.forEach(f => {
        let fp = path.join(d, f);
        if (fs.statSync(fp).isDirectory()) {
            r = r.concat(walk(fp));
        } else if (f.endsWith('.tsx')) {
            r.push(fp);
        }
    });
    return r;
}

const files = walk(path.join(__dirname, 'src', 'features'));
let totalChanged = 0;
let changedFiles = [];

files.forEach(f => {
    let orig = fs.readFileSync(f, 'utf8');
    let next = orig;

    // Replace lighter text colors with near-black #111
    next = next.replace(/text-\[#333\]/g, 'text-[#111]');
    next = next.replace(/text-\[#444\]/g, 'text-[#111]');
    next = next.replace(/text-\[#555\]/g, 'text-[#111]');
    next = next.replace(/text-\[#666\]/g, 'text-[#111]');
    next = next.replace(/text-\[#222\]/g, 'text-[#111]');
    
    // Replace Tailwind gray text utilities - only the lighter ones
    next = next.replace(/text-gray-500/g, 'text-[#111]');
    next = next.replace(/text-gray-600/g, 'text-[#111]');

    // Bump font-medium to font-semibold for content paragraphs  
    // (but preserve font-medium on very small UI elements if any)
    next = next.replace(/font-medium/g, 'font-semibold');

    if (orig !== next) {
        fs.writeFileSync(f, next, 'utf8');
        changedFiles.push(path.relative(__dirname, f));
        totalChanged++;
    }
});

console.log(`Updated ${totalChanged} files:`);
changedFiles.forEach(f => console.log('  -', f));
