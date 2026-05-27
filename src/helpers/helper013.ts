export function helper013(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper013 requires a non-empty input');
      }

      return `${normalized.split('').reverse().join('')}-h013`;
    }
