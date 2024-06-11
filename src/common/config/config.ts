import { Config } from './config.interface';

export default function (): Config {
  return {
    nest: {
      port: 3000,
    },
  };
}
