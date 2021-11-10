import fsExtra from 'fs-extra';
import path from 'path';

fsExtra.ensureDirSync('public');

fsExtra.copySync(
  path.resolve(process.cwd(), 'ace-editor'),
  path.resolve(process.cwd(), 'public/ace-editor')
);
