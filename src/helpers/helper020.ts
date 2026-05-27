export function helper020(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper020 requires a non-empty input');
      }

      return `${normalized.replace(/[aeiou]/gi, '*')}-h020`;
    }
