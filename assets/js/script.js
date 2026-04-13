const form = document.getElementById('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);

    // Validação
    if (!weight || !height || height <= 0 || !age) {
        alert("Preencha todos os campos corretamente!");
        return;
    }


   


    // Cálculo IMC (número)
    const bmi = weight / (height * height);

    // Formatação para exibição
    const bmiFixed = bmi.toFixed(2);

    // (Opcional) salvar dados para usar nas próximas páginas
    localStorage.setItem('bmi', bmiFixed);
    localStorage.setItem('age', age);

    // Redirecionamento conforme classificação
    if (bmi < 18.5) {
        window.location.href = "abaixo-peso.html";
    } 
    else if (bmi >= 18.5 && bmi <= 24.9) {
        window.location.href = "peso-ideal.html";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        window.location.href = "sobrepeso.html";
    }
    else {
        window.location.href = "obesidade.html";
    }
});


// Corrigido: envio com tecla Enter
form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('calculate').click();
    }
});

 localStorage.setItem('bmi', bmiFixed);
    localStorage.setItem('age', age);