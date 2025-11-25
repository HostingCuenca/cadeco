const bcrypt = require('bcryptjs');

async function testHash() {
  const password = 'cadeco2024';
  const hash = '$2b$10$bIcwtGN5GYy7hxt7w3TWKevDfX/eoloeA4Quzw4B5Lx8Z6YkrzL3i';

  console.log('Testing password:', password);
  console.log('Against hash:', hash);

  const isValid = await bcrypt.compare(password, hash);
  console.log('Valid?', isValid);

  // Generate a new one
  const newHash = await bcrypt.hash(password, 10);
  console.log('\nNew hash:', newHash);

  const testNew = await bcrypt.compare(password, newHash);
  console.log('New hash valid?', testNew);
}

testHash();
