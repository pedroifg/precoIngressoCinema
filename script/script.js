function validarDados() {
    let gender = document.getElementById('genero').value;
    let idade = document.getElementById('idade').value;

    if (idade >= 17) {
        document.getElementById('resultado').innerText = 'Pessoas com idade de 18 anos acima, pagam (R$10,00)';
    } else if (gender == 'feminino' && idade < 17) {
        document.getElementById('resultado').innerText = 'Mulheres com idade inferior a 17 anos, pagam meia entrada (R$5,00).';
    } else if (gender == 'masculino' && idade < 17) {
        document.getElementById('resultado').innerText = 'Homens com idade inferior a 17 anos pagam R$7,00';
    } else {
        
    }    
}