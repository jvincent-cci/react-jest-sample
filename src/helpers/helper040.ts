export function helper040(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper040 requires a non-empty input');
      }

      return `${normalized.replace(/[aeiou]/gi, '*')}-h040`;
    }
