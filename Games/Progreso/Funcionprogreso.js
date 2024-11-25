const ctx = document.getElementById('radarChart').getContext('2d');
const radarChart = new Chart(ctx, {
  type: 'radar',
  data: {
    labels: ['pensamiento lógico', 'viso-espaciales', 'coordinación psicomotriz', 'Retencion de información', 'Agilidad mental'],
    datasets: [
      {
        label: 'Progreso',
        data: [0, 0, 0, 0, 0], // Inicial
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      r: {
        beginAtZero: true,
        max: 100,
      },
    },
  },
});


function updateChart() {
  const progress = JSON.parse(localStorage.getItem("progress")) || [0, 0, 0, 0, 0];
  console.log("Progreso leído desde localStorage:", progress);
  radarChart.data.datasets[0].data = progress;
  radarChart.update();
}

setInterval(updateChart, 2000);
updateChart();

function updateProgressBars() {
  const progress = JSON.parse(localStorage.getItem("progress")) || [0, 0, 0, 0, 0];

  progress.forEach((value, index) => {
    // Actualiza la barra de progreso
    const progressBar = document.getElementById(`progress-bar-${index}`);
    const progressText = document.getElementById(`progress-text-${index}`);
    progressBar.style.width = `${value}%`;
    progressText.textContent = `${value}%`;
  });
}

// Refresca el gráfico y las barras cada 2 segundos
setInterval(() => {
  updateChart();
  updateProgressBars();
}, 2000);

// Inicializa al cargar
updateChart();
updateProgressBars();
