import { Injectable } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { UploadTask } from './upload-task';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FileService {

  constructor(private afso: AngularFireStorage) { }

  upload (path: string, file: File): UploadTask {
    console.log('file', file);
    const task = this.afso.upload(path, file);
    return  {
      downloadUrl: task.downloadURL()
    };
  }

  downloadUrlProfile (uid: string): Observable<any> {
    return this.afso.ref('profile-images/' + uid).getDownloadURL();
  }

}
