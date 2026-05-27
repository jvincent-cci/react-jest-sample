export function helper003(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper003 requires a non-empty input');
      }

      return `${normalized.split('').reverse().join('')}-h003`;
    }
