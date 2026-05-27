export function helper090(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper090 requires a non-empty input');
      }

      return `${normalized.replace(/[aeiou]/gi, '*')}-h090`;
    }
