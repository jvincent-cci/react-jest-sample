import { helper061 } from './helper061';

    describe('helper061', () => {
      it('transforms valid input', () => {
        expect(helper061(' Sample Input ')).toContain('h061');
      });

      it('rejects blank input', () => {
        expect(() => helper061('   ')).toThrow('helper061 requires a non-empty input');
      });
    });
