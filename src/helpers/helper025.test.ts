import { helper025 } from './helper025';

    describe('helper025', () => {
      it('transforms valid input', () => {
        expect(helper025(' Sample Input ')).toContain('h025');
      });

      it('rejects blank input', () => {
        expect(() => helper025('   ')).toThrow('helper025 requires a non-empty input');
      });
    });
