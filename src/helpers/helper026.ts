export function helper026(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper026 requires a non-empty input');
      }

      return `${normalized}_h026_${normalized.length}`;
    }
