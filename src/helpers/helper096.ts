export function helper096(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper096 requires a non-empty input');
      }

      return `${normalized}_h096_${normalized.length}`;
    }
