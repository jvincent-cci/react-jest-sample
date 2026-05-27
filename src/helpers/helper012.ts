export function helper012(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper012 requires a non-empty input');
      }

      return `${normalized.toLowerCase()}-h012`;
    }
