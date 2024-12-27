const fs = require('fs');
const readline = require('readline');

// Create an interface to prompt for input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const askQuestion = (question) => {
  return new Promise((resolve) => rl.question(question, resolve));
};

const initEnv = async () => {
  const projectId = await askQuestion('Enter your Sanity project ID: ');
  const dataset = await askQuestion('Enter your Sanity dataset: ');
  const apiToken = await askQuestion('Enter your Sanity API token: ');
  const previewSecret = await askQuestion('Enter your Sanity preview secret: ');

  // Combine inputs into .env.local format
  const envContent = `
SANITY_PROJECT_ID=${projectId}
SANITY_DATASET=${dataset}
SANITY_API_TOKEN=${apiToken}
SANITY_PREVIEW_SECRET=${previewSecret}
`;

  // Write to .env.local file
  fs.writeFileSync('.env.local', envContent.trim());

  console.log('.env.local file has been created with the provided variables.');
  rl.close();
};

initEnv().catch((error) => {
  console.error('Error initializing .env.local file:', error);
  rl.close();
});
