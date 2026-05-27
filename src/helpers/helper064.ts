export function helper064(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper064 requires a non-empty input');
      }

      return `${normalized.replace(/\s+/g, '-')}-h064`;
    }
