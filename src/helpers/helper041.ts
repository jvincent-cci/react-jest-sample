export function helper041(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper041 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h041`;
    }
