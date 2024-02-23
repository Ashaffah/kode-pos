import fs from "fs";

const FileImportAll = (
  dirname: fs.PathLike,
  onFileContent: (arg0: string, arg1: string) => void,
  onError: (arg0: NodeJS.ErrnoException) => void
) => {
  fs.readdir(dirname, (err, filenames) => {
    if (err) {
      onError(err);
      return;
    }
    filenames.forEach((filename) => {
      fs.readFile(dirname + filename, "utf-8", (err, content) => {
        if (err) {
          onError(err);
          return;
        }
        onFileContent(filename, content);
      });
    });
  });
};

const FileImport = (
  filepath: string,
  onFileContent: (arg0: string, arg1: string) => void,
  onError: (arg0: NodeJS.ErrnoException) => void
) => {
  fs.readFile(filepath, "utf-8", (err, content) => {
    if (err) {
      onError(err);
      return;
    }
    onFileContent(filepath, content);
  });
};

export { FileImportAll, FileImport };
