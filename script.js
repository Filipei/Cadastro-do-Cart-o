function cadastrarbutton(){
    const nomejs = document.getElementById('nome').value;
    const numerojs = document.getElementById('numero').value;
    const datajs = document.getElementById('data').value;
    const cvvjs = document.getElementById('cvv').value;

    if(nomejs === ""|| numerojs === "" ||  datajs === "" ||  cvvjs  === ""  ){
        Swal.fire({
            title: "Erro!",
            text: "Insira todos os dados",
            icon: "error",
            customClass: {
                popup: 'pop', 
                confirmButton: 'buttonswet',
                cancelButton: 'my-custom-cancel'
            },
          });

    } else{
        Swal.fire({
            title: "Sucesso!",
            text: "Cartão cadastrado com sucesso",
            icon: "success",
            customClass: {
                popup: 'pop', 
                confirmButton: 'buttonswet',
                cancelButton: 'my-custom-cancel'
            },
          });
    }
}

function formatoautoData(input){
    let value = input.value;
    if (value.length === 2 && !value.includes('/')) {
        input.value = value + '/';
    } 
    if (value.length < 4 && value.includes('/')) {
        input.value = value.replace('/', ''); 
    }
}
function formatoautonumero(input) {
    let valor = input.value.replace(/\s+/g, ''); 
    let formatado = valor.match(/.{1,4}/g)?.join(' ') || ''; 
    input.value = formatado;
}

function substituir() {
    var nomeInput = document.getElementById('nome').value;
    document.getElementById('nomecartaotext').innerText = nomeInput;
    if (nomeInput === ""){
        nomecartaotext.innerText = "Digite Seu nome"
    }
}
function substituirnum() {
    var numeroInput = document.getElementById('numero').value;
    document.getElementById('numerocartaotext').innerText = numeroInput;
    if (numeroInput === ""){
        numerocartaotext.innerText = "0000 0000 0000 0000"
    }
}
function substituirdata() {
    var dataInput = document.getElementById('data').value;
    document.getElementById('datacartaotext').innerText = dataInput;
    if (dataInput === ""){
        datacartaotext.innerText = "00/00"
    }
}
function substituircvv() {
    var cvvInput = document.getElementById('cvv').value;
    document.getElementById('cvvcartaotext').innerText = cvvInput
    if (cvvInput === ""){
        cvvcartaotext.innerText = "000"
    }
}