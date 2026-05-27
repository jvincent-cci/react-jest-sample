export function helper075(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper075 requires a non-empty input');
      }

      return `${normalized.length}-chars-h075`;
    }
