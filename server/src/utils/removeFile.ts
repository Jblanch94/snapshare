import { promisify } from 'util';
import fs from 'fs';

export const unlinkAsync = promisify(fs.unlink);
