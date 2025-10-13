/**
 * Lovable Build Configuration
 * This file tells Lovable how to build and deploy your BitMind application
 */

module.exports = {
  // Main entry point for your React application
  entry: './src/main.tsx',
  
  // Build output configuration
  output: {
    filename: 'bundle.js',
    path: './dist',
    clean: true  // Clean output directory before each build
  },
  
  // Build command (uses the unified build that includes backend)
  build: {
    command: 'npm run build:unified',
    outputDir: 'dist'
  },
  
  // Development server configuration
  dev: {
    command: 'npm run dev',
    port: 8080
  },
  
  // Environment variables (add your env vars here)
  env: {
    NODE_ENV: 'production'
  },
  
  // Files to include in deployment
  include: [
    'dist/**/*',
    'package.json',
    'package-lock.json'
  ],
  
  // Files to exclude from deployment
  exclude: [
    'node_modules',
    'src',
    'backend/src',
    'tests',
    '*.md',
    '.git',
    '.env.local'
  ]
};

