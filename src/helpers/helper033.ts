export function helper033(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper033 requires a non-empty input');
      }

      return `${normalized.split('').reverse().join('')}-h033`;
    }
