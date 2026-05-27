import { helper002 } from './helper002';

    describe('helper002', () => {
      it('transforms valid input', () => {
        expect(helper002(' Sample Input ')).toContain('h002');
      });

      it('rejects blank input', () => {
        expect(() => helper002('   ')).toThrow('helper002 requires a non-empty input');
      });
    });
