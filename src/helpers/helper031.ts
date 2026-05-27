export function helper031(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper031 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h031`;
    }
