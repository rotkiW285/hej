async function fetchMiejscowosc() {
    try {
        const response = await fetch("miejscowosci.json");
        const miejscowosci = await response.json();

        if (!miejscowosci || miejscowosci.length === 0) {
            document.getElementById('response').innerText = "Nie znaleziono żadnych miejscowości w bazie danych.";
            return;
        }

        const randomMiejscowosc = miejscowosci[Math.floor(Math.random() * miejscowosci.length)];
        if (randomMiejscowosc.toLowerCase() === "legnica") {
            document.getElementById('response').innerText = "Pa Legnica!";
        } else {
            document.getElementById('response').innerText = `Cześć ${randomMiejscowosc}`;
        }
    } catch (error) {
        console.error("Błąd podczas pobierania miejscowości:", error);
        document.getElementById('response').innerText = "Wystąpił problem z odczytywaniem miejscowości :(";
    }
}

document.getElementById('fetchButton').addEventListener('click', fetchMiejscowosc);

window.onload = fetchMiejscowosc;