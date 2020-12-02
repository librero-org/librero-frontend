export function functionTagInputFile(){
    let inputFile = document.getElementById('input-file');
    let fileNameField = document.getElementById('input-file-name');
    inputFile.addEventListener('change', function(event){
        let uploadedFileName = event.target.files[0].name;
        fileNameField.textContent = uploadedFileName;
    });
}