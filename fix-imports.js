import fs from 'fs'
import path from 'path'

// Get all .ts files in the tsbuildtmp directory
function getAllFiles(dir) {
    const files = []
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
        const fullPath = path.join(dir, item)
        const stat = fs.statSync(fullPath)
        
        if (stat.isDirectory()) {
            files.push(...getAllFiles(fullPath))
        } else if (item.endsWith('.ts')) {
            files.push(fullPath)
        }
    }
    
    return files
}

// Replace the flatbuffers import in each file
function fixImports(file) {
    let content = fs.readFileSync(file, 'utf8')
    
    // Replace the flatbuffers import
    content = content.replace(
        /import \* as flatbuffers from ['"]flatbuffers['"];/,
        'import * as flatbuffers from \'../../flatbuffers_mjs/flatbuffers.js\';'
    )
    
    fs.writeFileSync(file, content)
    console.log(`Fixed imports in ${file}`)
}

// Process all files
const files = getAllFiles('./tsbuildtmp')
files.forEach(fixImports)
