export function helper001(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper001 requires a non-empty input');
      }

      return `${normalized.toUpperCase()}-h001`;
    }
