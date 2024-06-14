let numbers = [];
let totalGenerated = false;

function generateNumbers() {
    const amount = parseInt(document.getElementById('amount').value);
    if (isNaN(amount) || amount <= 0) {
        document.getElementById('result').innerText = "Ongeldige invoer. Voer een positief nummer in.";
        return;
    }

    numbers = new Array(amount);
    for (let i = 0; i < amount; i++) {
        numbers[i] = Math.floor(Math.random() * 100);
    }

    totalGenerated = true;
    document.getElementById('search-section').style.display = 'block';
    document.getElementById('stop-button').style.display = 'block';
    document.getElementById('result').innerText = "Nummers gegenereerd.";
}

function searchNumber() {
    if (!totalGenerated) {
        document.getElementById('result').innerText = "Genereer eerst nummers.";
        return;
    }

    const varInput = parseInt(document.getElementById('search').value);
    if (isNaN(varInput)) {
        document.getElementById('result').innerText = "Ongeldige invoer. Voer een nummer in.";
        return;
    }

    let found = false;
    for (let i = 0; i < numbers.length; i++) {
        if (varInput === numbers[i]) {
            document.getElementById('result').innerText = "Het nummer " + varInput + " is in de lijst op plaats " + i;
            found = true;
            break;
        }
    }

    if (!found) {
        document.getElementById('result').innerText = "Het nummer zit niet in de lijst.";
    }
}

function stop() {
    document.getElementById('result').innerText = "Bedankt voor het gebruiken.";
    document.getElementById('search-section').style.display = 'none';
    document.getElementById('stop-button').style.display = 'none';
    let numbers[] = 0;
    var input = 0;
    
}
