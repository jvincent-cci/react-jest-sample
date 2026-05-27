export function helper021(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper021 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h021`;
    }
