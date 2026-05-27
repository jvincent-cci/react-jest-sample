export function helper070(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper070 requires a non-empty input');
      }

      return `${normalized.replace(/[aeiou]/gi, '*')}-h070`;
    }
