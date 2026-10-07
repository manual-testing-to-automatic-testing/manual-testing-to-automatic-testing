// Mocha global fixtures for the API tests (npm run test:api).
//
// Unless FHIR_BASE_URL points at another server, start the local FHIR sandbox
// (fhir-sandbox/server.js) before the tests and stop it after. If a sandbox is
// already running on port 8080, for example from `npm run fhir` in another
// terminal, use that one instead.

import { spawn } from 'node:child_process';

export const FHIR_BASE_URL = (process.env.FHIR_BASE_URL ?? 'http://localhost:8080/fhir').replace(
  /\/$/,
  '',
);

let child;

async function reachable() {
  try {
    const response = await fetch(`${FHIR_BASE_URL}/metadata`, {
      signal: AbortSignal.timeout(2000),
    });
    return response.ok;
  } catch {
    return false;
  }
}

export async function mochaGlobalSetup() {
  if (process.env.FHIR_BASE_URL || (await reachable())) return;
  child = spawn(process.execPath, ['fhir-sandbox/server.js'], {
    stdio: ['ignore', 'inherit', 'inherit'],
  });
  for (let i = 0; i < 50; i++) {
    if (await reachable()) return;
    await new Promise((resolve) => setTimeout(resolve, 100));
  }
  throw new Error('The FHIR sandbox did not start. Try `npm run fhir` to see why.');
}

export async function mochaGlobalTeardown() {
  child?.kill();
}
