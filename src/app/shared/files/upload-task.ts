import { Observable } from 'rxjs/Observable';

export interface UploadTask {
  downloadUrl?: Observable<string>;

}
