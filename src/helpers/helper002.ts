export function helper002(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper002 requires a non-empty input');
      }

      return `${normalized.toLowerCase()}-h002`;
    }
