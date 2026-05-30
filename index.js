const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint utama dengan navigasi
app.get('/', (req, res) => {
  res.send(`
    <h1>Praktikum Azure App Service</h1>
    <p>Aplikasi 1 berjalan.</p>
    <ul>
      <li><a href="/status">Cek Status</a></li>
      <li><a href="/profil">Cek Profil</a></li>
    </ul>
  `);
});

// Endpoint status
app.get('/status', (req, res) => {
  res.json({
    status: 'running',
    service: 'Azure App Service',
    timestamp: new Date()
  });
});

// Endpoint profil
app.get('/profil', (req, res) => {
  res.json({
    mataKuliah: 'Komputasi Awan',
    topik: 'Serverless Azure'
  });
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
