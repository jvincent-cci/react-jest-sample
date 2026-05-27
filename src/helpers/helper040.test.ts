import { helper040 } from './helper040';

    describe('helper040', () => {
      it('transforms valid input', () => {
        expect(helper040(' Sample Input ')).toContain('h040');
      });

      it('rejects blank input', () => {
        expect(() => helper040('   ')).toThrow('helper040 requires a non-empty input');
      });
    });
