import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function renderMermaidDiagrams() {
  const contentDir = path.join(__dirname, '../src/data');
  const files = fs.readdirSync(contentDir);

  files.forEach((file) => {
    if (file.endsWith('.md')) {
      const filePath = path.join(contentDir, file);
      const content = fs.readFileSync(filePath, 'utf-8');

      const mermaidBlocks = content.match(/```mermaid\n([\s\S]*?)```/g);

      if (mermaidBlocks) {
        mermaidBlocks.forEach((block, index) => {
          const diagram = block.replace('```mermaid\n', '').replace('```', '');
          const outputPath = path.join(contentDir, `${file.replace('.md', '')}-${index}.svg`);

          try {
            execSync(`npx mmdc -i - -o ${outputPath}`, {
              input: diagram,
              stdio: ['pipe', 'ignore', 'ignore'],
            });

            console.log(`Rendered diagram ${index} from ${file} to ${outputPath}`);
          } catch (error) {
            console.error(`Error rendering diagram ${index} from ${file}:`, error);
          }
        });
      }
    }
  });
}

renderMermaidDiagrams();
