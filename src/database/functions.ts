import fs from 'fs';

export const readFile = () => {
  const data = fs.readFileSync('src/database/data.json', 'utf-8');
  return JSON.parse(data)
}

export const writeFile = (data: any) => {
  const updateFile = JSON.stringify(data, null, 2)
  fs.writeFileSync('src/database/data.json', updateFile, 'utf-8')
}