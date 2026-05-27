import { helper096 } from './helper096';

    describe('helper096', () => {
      it('transforms valid input', () => {
        expect(helper096(' Sample Input ')).toContain('h096');
      });

      it('rejects blank input', () => {
        expect(() => helper096('   ')).toThrow('helper096 requires a non-empty input');
      });
    });
