import { File } from './file';
import { Column } from './column';

export interface FileColumn extends Column {
  file: File;
  url: string;
}
