class File {
    constructor(name, type, size) {
        this.name = name;
        this.type = type;
        this.size = size;
    }
    
    getSizeInBytes() {
        return this.size;
    }
    
    getSizeInKB() {
        return (this.size / 1024).toFixed(2);
    }
    
    getSizeInMB() {
        return (this.size / (1024 * 1024)).toFixed(2);
    }
}

class FileReader {
    constructor(inputElement, fileNameElement, fileTypeElement, fileSizeElement) {
        this.inputElement = inputElement;
        this.fileNameElement = fileNameElement;
        this.fileTypeElement = fileTypeElement;
        this.fileSizeElement = fileSizeElement;
        
        this.inputElement.addEventListener('change', this.handleFileChange.bind(this));
    }
    
    handleFileChange(event) {
        const fileList = event.target.files;
        const file = new File(fileList[0].name, fileList[0].type, fileList[0].size);
        
        this.fileNameElement.innerText = file.name;
        this.fileTypeElement.innerText = file.type;
        
        const fileSizeInBytes = file.getSizeInBytes();
        if (fileSizeInBytes >= 1024 * 1024) {
            this.fileSizeElement.innerText = `${file.getSizeInMB()} MB`;
        } else {
            this.fileSizeElement.innerText = `${file.getSizeInKB()} KB`;
        }
    }
}


const fileReaderInput = document.getElementById('file-reader');
const fileName = document.getElementById('file-name');
const fileType = document.getElementById('file-type');
const fileSize = document.getElementById('file-size');

const fileReader = new FileReader(fileReaderInput, fileName, fileType, fileSize);
