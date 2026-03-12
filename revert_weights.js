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

    // Revert font-semibold back to font-medium for body/content text
    next = next.replace(/font-semibold/g, 'font-medium');

    if (orig !== next) {
        fs.writeFileSync(f, next, 'utf8');
        changedFiles.push(path.relative(__dirname, f));
        totalChanged++;
    }
});

console.log(`Reverted ${totalChanged} files:`);
changedFiles.forEach(f => console.log('  -', f));
