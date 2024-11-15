const consultarCEP=()=>{
    const cep=document.getElementById('cep').value.trim();
    
    if(!/^\d{8}$/.test(cep)){
        document.getElementById('resultado').innerHTML='<p style="color: red;">CEP inválido. Insira novamento</p>';
        return;
    }
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then (response=>response.json())
    .then(data=>{
        if(data.erro){
            document.getElementById('resultado').innerHTML='<p style="color:red;">CEP não encontrado.</p>';
            return;
        }
        else{
                document.getElementById('resultado').innerHTML = `
                <h2>Resultado</h2>
                <li><strong>Logradouro:</strong>${data.logradouro}</li>
                <li><strong>Bairro:</strong>${data.bairo}</li>
                <li><strong>Cidade:</strong>${data.localidade}</li>
                <li><strong>Estado:</strong>${data.uf}</li>
    
              `;
        }
    
    })
    .catch(error=>
    {
        console.error('Erro:',error);
        document.getElementById('resultado').innerHTML='<p style="color:red;>Erro ao buscar CEP.</p>'
    }
    )
    
        }
       

       