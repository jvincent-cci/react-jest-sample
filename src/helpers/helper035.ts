export function helper035(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper035 requires a non-empty input');
      }

      return `${normalized.length}-chars-h035`;
    }
