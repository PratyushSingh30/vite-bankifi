#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { program } from 'commander';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

program
  .option('-e, --environment <env>', 'Environment name (e.g., cash, bankifi, axiom)')
  .option('-c, --config <config>', 'Config name (e.g., sbox, prod, dev)')
  .parse();

const options = program.opts();

if (!options.environment || !options.config) {
  console.error('Error: Both --environment (-e) and --config (-c) are required');
  console.error('Example: node scripts/load-environment.js -e cash -c sbox');
  process.exit(1);
}

const { environment, config } = options;

// Path to the config file
const configPath = path.join(__dirname, '..', 'config', environment, `${config}.json`);

if (!fs.existsSync(configPath)) {
  console.error(`Error: Config file not found: ${configPath}`);
  process.exit(1);
}

try {
  // Read the config file
  const configData = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  
  // Create .env file for Vite
  const envPath = path.join(__dirname, '..', '.env');
  let envContent = `# Generated environment file for ${environment}:${config}\n`;
  
  // Convert config to environment variables with VITE_ prefix
  function flattenConfig(obj, prefix = 'VITE_') {
    const result = {};
    
    for (const [key, value] of Object.entries(obj)) {
      const envKey = `${prefix}${key}`;
      
      if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
        // Recursively flatten nested objects
        Object.assign(result, flattenConfig(value, `${envKey}_`));
      } else {
        // Convert arrays and primitive values to strings
        result[envKey] = Array.isArray(value) ? JSON.stringify(value) : String(value);
      }
    }
    
    return result;
  }
  
  const flattenedConfig = flattenConfig(configData);
  
  // Write to .env file
  for (const [key, value] of Object.entries(flattenedConfig)) {
    envContent += `${key}=${value}\n`;
  }
  
  fs.writeFileSync(envPath, envContent);
  
  console.log(`✅ Environment loaded: ${environment}:${config}`);
  console.log(`📝 Generated .env file with ${Object.keys(flattenedConfig).length} variables`);
  console.log(`🔗 API Root: ${configData.API?.ROOT_URL || 'Not specified'}`);
  
} catch (error) {
  console.error(`Error loading config: ${error.message}`);
  process.exit(1);
}