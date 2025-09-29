import express from 'express';
import mysql from 'mysql2';

const app = express();

const config ={
    host: process.env.DB_HOST || 'db',
    user: process.env.DB_USER || 'admin',
    password: process.env.DB_PASSWORD || 'admin123',
    database: process.env.DB_NAME || 'nube',
    port: Number(process.env.DB_PORT) || 3306,
}



async function start() {
    const conn = await mysql.createConnection(config);

  // Crear tabla si no existe
    await conn.execute(`
    CREATE TABLE IF NOT EXISTS pings ( id INT AUTO_INCREMENT PRIMARY KEY, created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )`);

  // Insertar un registro de ping
    await conn.execute("INSERT INTO pings () VALUES ()");

  // Contar registros
    const [rows] = await conn.execute("SELECT COUNT(*) AS total FROM pings");

  // Ruta principal
app.get("/", (_req, res) => {
    res.send(`Hola Cloud con MariaDB! Pings totales: ${rows[0].total}`);});

  // Iniciar servidor
app.listen(3000, () => {
    console.log("App en http://localhost:3000 [DB=MariaDB, servicio=Ok]"); 
});
}

start().catch(err => {
    console.error("Error al iniciar:", err);
    process.exit(1);
});
