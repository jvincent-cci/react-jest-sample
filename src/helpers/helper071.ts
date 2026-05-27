export function helper071(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper071 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h071`;
    }
