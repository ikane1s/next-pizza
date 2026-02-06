const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

async function test() {
  try {
    await client.connect();
    console.log('✅ Подключение успешно!');

    const res = await client.query('SELECT version()');
    console.log('Версия PostgreSQL:', res.rows[0].version);

    await client.end();
  } catch (error) {
    console.error('❌ Ошибка подключения:', error.message);
    console.error('Код ошибки:', error.code);
  }
}

test();
