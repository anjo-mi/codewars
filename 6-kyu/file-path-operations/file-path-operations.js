 
class FileMaster {
  constructor(filepath) {
    const [path,ext] = filepath.split('.');
    this._ext = ext;
    this._file = '';
    for (let i = path.length - 1 ; i >=0 && path[i] !== '/' ; i--){
      this._file = path[i] + this._file;
    }
    this._path = path.slice(0,-this._file.length);
  }
  
  extension() {
    return this._ext;
  }
  
  filename() {
    return this._file;
  }
  
  dirpath() {
    return this._path;
  }
}