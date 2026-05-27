import { helper080 } from './helper080';

    describe('helper080', () => {
      it('transforms valid input', () => {
        expect(helper080(' Sample Input ')).toContain('h080');
      });

      it('rejects blank input', () => {
        expect(() => helper080('   ')).toThrow('helper080 requires a non-empty input');
      });
    });
