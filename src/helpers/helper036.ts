export function helper036(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper036 requires a non-empty input');
      }

      return `${normalized}_h036_${normalized.length}`;
    }
