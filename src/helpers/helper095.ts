export function helper095(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper095 requires a non-empty input');
      }

      return `${normalized.length}-chars-h095`;
    }
