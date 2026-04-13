const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
    /* Previne o comportamento padrão do evento submit do JS, ou seja,
    impede o recarregamento da página */
    event.preventDefault();

    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    const bmi = (weight / (height * height)).toFixed(2);

    if (!isNaN(bmi)) {
        const value = document.getElementById('value');
        let description = '';

        value.classList.add('attention');
        
        document.getElementById('infos').classList.remove('hidden');
    
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

        value.textContent = bmi.replace('.', ',');
        document.getElementById('description').textContent = description;
    }
});

//setTimeout(() => {
  //  window.location.href = "index.html";
//}, 1500);

form.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        document.getElementById('#calculate').click();
    }
});