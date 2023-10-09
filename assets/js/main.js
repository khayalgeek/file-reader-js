let fileReaderInput = document.getElementById('file-reader');
let fileType =document.getElementById('file-type');

fileReaderInput.addEventListener('change', (event) => {
    const fileList = event.target.files;
    fileType.innerText = `${fileList[0].type}`
});