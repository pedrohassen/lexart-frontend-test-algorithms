// 3. Create an algorithm that generates the following random ID pattern: XXXX-AAAA-BBBB-CCCC
// a. Where XXXX, AAAA, BBBB and CCCC patterns are random alphanumeric
// b. The default is a string: "XXXX-AAAA-BBBB-CCCC"
// c. The result must be stored in a variable. For example:
// i. $id = generarId()
// ii. id is ~ abc1-bb12-234a-bcc2

const getRandomChar = () => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return characters[Math.floor(Math.random() * characters.length)];
};

const generateId = () => {
  const patterns = ['XXXX', 'AAAA', 'BBBB', 'CCCC'];

  const segments = patterns.map(pattern =>
    Array.from({ length: pattern.length }, getRandomChar).join('')
  );

  return segments.join('-');
};

// Example usage:
const id = generateId();
console.log('3. RANDOM ID:', id);

// 4. Send the repository to: join-us@lexartlabs.com with the subject: "Name of the candidate - FrontEnd Test - Algorithms"
