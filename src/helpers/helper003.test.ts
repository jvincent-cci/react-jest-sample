import { helper003 } from './helper003';

    describe('helper003', () => {
      it('transforms valid input', () => {
        expect(helper003(' Sample Input ')).toContain('h003');
      });

      it('rejects blank input', () => {
        expect(() => helper003('   ')).toThrow('helper003 requires a non-empty input');
      });
    });
