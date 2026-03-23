const fs = require('fs');
const text = fs.readFileSync('d:\\Programming Lesson\\Codes\\portfolio\\text.txt', 'utf-8');

// Extract script
const scriptMatch = text.match(/<script[\s\S]*?>([\s\S]*?)<\/script>/);
if (scriptMatch) fs.writeFileSync('d:\\Programming Lesson\\Codes\\portfolio\\extracted_script.js', scriptMatch[1]);

// Extract style (not the adblocker one)
const styleMatch = text.match(/<style>(?!:root)([\s\S]*?)<\/style>/);
if (styleMatch) {
    fs.writeFileSync('d:\\Programming Lesson\\Codes\\portfolio\\extracted_style.css', styleMatch[1]);
} else {
    // try any style that is length > 1000
    const styles = [...text.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)];
    const mainStyle = styles.find(s => s[1].length > 2000);
    if (mainStyle) fs.writeFileSync('d:\\Programming Lesson\\Codes\\portfolio\\extracted_style.css', mainStyle[1]);
}

// Extract images
const imagesMatch = [...text.matchAll(/<img id="([^"]+)" [^>]*src="([^"]+)"/g)];
const imagesObj = {};
imagesMatch.forEach(m => imagesObj[m[1]] = m[2]);
fs.writeFileSync('d:\\Programming Lesson\\Codes\\portfolio\\extracted_images.json', JSON.stringify(imagesObj, null, 2));

console.log("Extraction complete.");
