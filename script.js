ddocument.getElementById('flight-search-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const origin = document.getElementById('origin').value;
    const destination = document.getElementById('destination').value;
    const date = document.getElementById('date').value;
  
    // Lógica para buscar vuelos (ejemplo simple)
    console.log(`Buscando vuelos desde ${origin} a ${destination} para el ${date}`);
  });
  
function displayResults(results) {
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';
    
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'result';
        resultElement.innerHTML = `
            <h2>${result.flight}</h2>
            <p>Origen: ${result.origin}</p>
            <p>Destino: ${result.destination}</p>
            <p>Fecha de salida: ${result.departureDate}</p>
            <p>Precio: ${result.price}</p>
        `;
        resultsDiv.appendChild(resultElement);
    });
}
