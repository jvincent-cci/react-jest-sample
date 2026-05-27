import { helper028 } from './helper028';

    describe('helper028', () => {
      it('transforms valid input', () => {
        expect(helper028(' Sample Input ')).toContain('h028');
      });

      it('rejects blank input', () => {
        expect(() => helper028('   ')).toThrow('helper028 requires a non-empty input');
      });
    });
