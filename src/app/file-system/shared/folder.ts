export interface Folder {
  name: string;
  owner?: string;
  files?: [{
    displayName: string;
    uid: string;
  }];
  subFolders?: [{
    name: string;
    uid: string;
  }];
}
