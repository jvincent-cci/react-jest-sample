export function helper087(input: string): string {
      const normalized = input.trim();

      if (normalized.length === 0) {
        throw new Error('helper087 requires a non-empty input');
      }

      return `${normalized.slice(0, 8)}-h087`;
    }
