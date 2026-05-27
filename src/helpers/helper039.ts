export function helper039(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper039 requires a non-empty input');
      }

      return `${normalized.split(/\s+/).map((part) => part[0]?.toUpperCase() ?? '').join('')}-h039`;
    }
