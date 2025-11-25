const bcrypt = require('bcryptjs');

async function generateHash() {
  const password = 'cadeco2024';
  const hash = await bcrypt.hash(password, 10);
  console.log('Password:', password);
  console.log('Hash:', hash);
  console.log('\nAgrega esto a tu .env.local:');
  console.log(`ADMIN_PASSWORD_HASH=${hash}`);
}

generateHash();
