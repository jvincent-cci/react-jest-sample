export function helper061(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper061 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h061`;
    }
