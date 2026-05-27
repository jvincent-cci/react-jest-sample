export function helper083(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper083 requires a non-empty input');
      }

      return `${normalized.split('').reverse().join('')}-h083`;
    }
