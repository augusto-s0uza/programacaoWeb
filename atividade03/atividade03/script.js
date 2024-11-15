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
                <p2><strong>Logradouro:</strong>${data.logradouro}</p2>
                <p2><strong>Bairro:</strong>${data.bairo}</p2>
                <p2><strong>Cidade:</strong>${data.localidade}</p2>
                <p2><strong>Estado:</strong>${data.uf}</p2>
    
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
       

       