import { helper081 } from './helper081';

    describe('helper081', () => {
      it('transforms valid input', () => {
        expect(helper081(' Sample Input ')).toContain('h081');
      });

      it('rejects blank input', () => {
        expect(() => helper081('   ')).toThrow('helper081 requires a non-empty input');
      });
    });
