// const onload= await reader.onload();
let input = document.querySelector('input');
let textarea = document.querySelector('textarea');
var file_data;

 
input.addEventListener('change',async () => {
    
    // var file_data ;
    
    let files = input.files;
    
    if(files.length == 0) return;
    
    const file = files[0];
    
    let reader = new FileReader();
    // const x= await reader.onload();
    
    reader.onload = (e) => {
        const file = e.target.result;
        const lines = file.split(/\r\n|\n/);
        textarea.value = lines.join('\n');
        file_data = e.currentTarget.result;
        console.log(file_data);

        console.log('e -> ', e.currentTarget.result);
    };
    console.log('hi');
    reader.onerror =  (e) => alert(e.target.error.name);
 
    reader.readAsText(file); 
    
});