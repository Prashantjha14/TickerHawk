interface Config {
  mongoUri: string;
  brightDataAuth: string;
  upstashRedisRestUrl: string;
  upstashRedisRestToken: string;
  adminSecret: string;
}

function getEnvVar(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

const config: Config = {
  mongoUri: getEnvVar("MONGODB_URI"),
  brightDataAuth: getEnvVar("BRIGHT_DATA_AUTH"),
  upstashRedisRestUrl: getEnvVar("UPSTASH_REDIS_REST_URL"),
  upstashRedisRestToken: getEnvVar("UPSTASH_REDIS_REST_TOKEN"),
  adminSecret: getEnvVar("ADMIN_SECRET"),
};

export default config;
