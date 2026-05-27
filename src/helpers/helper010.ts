export function helper010(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper010 requires a non-empty input');
      }

      return `${normalized.replace(/[aeiou]/gi, '*')}-h010`;
    }
