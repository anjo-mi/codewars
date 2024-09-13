class FileNameExtractor {
    static extractFileName (dirtyFileName) {
        let firstChop = dirtyFileName.search('_')
        let lastChop = dirtyFileName.lastIndexOf('.')
        return dirtyFileName.slice(firstChop + 1, lastChop)
    }
}


console.log(FileNameExtractor.extractFileName("1_FILE_NAME.EXTENSION.OTHEREXTENSIONadasdassdassds34"),"FILE_NAME.EXTENSION");
console.log(FileNameExtractor.extractFileName("1231231223123131_FILE_NAME.EXTENSION.OTHEREXTENSION"),"FILE_NAME.EXTENSION");