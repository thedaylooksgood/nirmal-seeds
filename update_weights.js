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

const files = walk(path.join(__dirname, 'src/features'));
let c = 0;

files.forEach(f => {
    let orig = fs.readFileSync(f, 'utf8');
    
    // Replace lighter sub-colors to #111 (almost black)
    let next = orig
        .replace(/text-\\[#333\\]/g, 'text-[#111]')
        .replace(/text-\\[#444\\]/g, 'text-[#111]')
        .replace(/text-\\[#555\\]/g, 'text-[#111]')
        .replace(/text-\\[#222\\]/g, 'text-[#111]')
        .replace(/text-gray-600/g, 'text-[#111]')
        .replace(/text-gray-700/g, 'text-[#111]')
        
    // Bulk replace all font-medium with font-semibold
    next = next.replace(/font-medium/g, 'font-semibold');
    
    // Some content had light gray colors that may have been missed
    next = next.replace(/text-\\[#666\\]/g, 'text-[#111]');

    if (orig !== next) {
        fs.writeFileSync(f, next, 'utf8');
        c++;
    }
});

console.log(`Fixed ${c} files typography.`);
