const text = document.querySelector('textarea')
fileName = document.querySelector('.file-name input')
selectMenu = document.querySelector('.save-as select')
saveBtn = document.querySelector('.save-btn')

selectMenu.addEventListener('change',() =>{
    let selectedFormat  = selectMenu.options[selectMenu.SelectedIndex].text;
    saveBtn.innerText = `Save As ${selectedFormat.split(" ")[0]} File`;
})

// Event Listeners
saveBtn.addEventListener('click', () =>{
    console.log(selectMenu.value)
    const blob = new Blob([text.value],{type: selectMenu.value})
    const fileUrl = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.download = fileName.value;
    link.href = fileUrl;
    link.click();
})