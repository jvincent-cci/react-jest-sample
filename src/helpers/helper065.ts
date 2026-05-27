export function helper065(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper065 requires a non-empty input');
      }

      return `${normalized.length}-chars-h065`;
    }
