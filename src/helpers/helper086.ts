export function helper086(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper086 requires a non-empty input');
      }

      return `${normalized}_h086_${normalized.length}`;
    }
