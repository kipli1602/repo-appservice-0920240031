const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Endpoint utama dengan navigasi
app.get('/', (req, res) => {
  res.send(`
    <h1>Praktikum Azure App Service</h1>
    <p>Aplikasi 3 berjalan.</p>
    <ul>
      <li><a href="/status">Cek Status</a></li>
      <li><a href="/profil">Cek Profil</a></li>
    </ul>
  `);
});

// Endpoint status dengan tombol back
app.get('/status', (req, res) => {
  res.send(`
    <h2>Status Aplikasi</h2>
    <pre>${JSON.stringify({
      status: 'running',
      service: 'Azure App Service',
      timestamp: new Date()
    }, null, 2)}</pre>
    <a href="/">⬅ Back to Home</a>
  `);
});

// Endpoint profil dengan tombol back
app.get('/profil', (req, res) => {
  res.send(`
    <h2>Profil</h2>
    <pre>${JSON.stringify({
      mataKuliah: 'Komputasi Awan',
      topik: 'Serverless Azure'
    }, null, 2)}</pre>
    <a href="/">⬅ Back to Home</a>
  `);
});

// Jalankan server
app.listen(port, () => {
  console.log(`Server berjalan pada port ${port}`);
});
