export function helper084(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper084 requires a non-empty input');
      }

      return `${normalized.replace(/\s+/g, '-')}-h084`;
    }
