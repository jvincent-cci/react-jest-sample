export function helper062(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper062 requires a non-empty input');
      }

      return `${normalized.toLowerCase()}-h062`;
    }
