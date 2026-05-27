export function helper025(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper025 requires a non-empty input');
      }

      return `${normalized.length}-chars-h025`;
    }
