export function helper038(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper038 requires a non-empty input');
      }

      return `${normalized.repeat(2).slice(0, 24)}-h038`;
    }
