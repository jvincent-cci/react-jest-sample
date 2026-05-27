export function helper078(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper078 requires a non-empty input');
      }

      return `${normalized.repeat(2).slice(0, 24)}-h078`;
    }
