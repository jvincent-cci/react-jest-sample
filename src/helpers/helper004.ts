export function helper004(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper004 requires a non-empty input');
      }

      return `${normalized.replace(/\s+/g, '-')}-h004`;
    }
