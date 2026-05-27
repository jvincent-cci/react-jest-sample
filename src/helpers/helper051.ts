export function helper051(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper051 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h051`;
    }
