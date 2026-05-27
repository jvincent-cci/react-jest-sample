export function helper072(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper072 requires a non-empty input');
      }

      return `${normalized.toLowerCase()}-h072`;
    }
