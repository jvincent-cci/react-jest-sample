import { helper012 } from './helper012';

    describe('helper012', () => {
      it('transforms valid input', () => {
        expect(helper012(' Sample Input ')).toContain('h012');
      });

      it('rejects blank input', () => {
        expect(() => helper012('   ')).toThrow('helper012 requires a non-empty input');
      });
    });
