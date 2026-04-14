import { SERIES } from './data.js';
function getAverage() {
    const total = SERIES.reduce((sum, s) => sum + s.seasons, 0);
    return Math.round(total / SERIES.length);
}
function renderTable() {
    const tbody = document.getElementById('series-body');
    SERIES.forEach(serie => {
        const tr = document.createElement('tr');
        tr.style.cursor = 'pointer';
        tr.innerHTML = `
            <td>${serie.id}</td>
            <td><a href="#">${serie.name}</a></td>
            <td>${serie.channel}</td>
            <td>${serie.seasons}</td>
        `;
        tr.addEventListener('click', () => showDetail(serie.id));
        tbody.appendChild(tr);
    });
    const avg = document.getElementById('average');
    avg.textContent = `Seasons average: ${getAverage()}`;
}
function showDetail(id) {
    const serie = SERIES.find(s => s.id === id);
    const detail = document.getElementById('detail');
    detail.innerHTML = `
        <div class="card">
            <img src="${serie.image}" class="card-img-top" alt="${serie.name}" style="height: 700px; object-fit: contain; background-color: #f8f8f8;">
            <div class="card-body">
                <h5 class="card-title">${serie.name}</h5>
                <p class="card-text">${serie.description}</p>
                <a href="${serie.url}" class="text-primary">${serie.url}</a>
            </div>
        </div>
    `;
}
renderTable();
