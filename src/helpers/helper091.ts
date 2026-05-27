export function helper091(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper091 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h091`;
    }
