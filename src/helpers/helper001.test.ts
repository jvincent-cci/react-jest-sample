import { helper001 } from './helper001';

    describe('helper001', () => {
      it('transforms valid input', () => {
        expect(helper001(' Sample Input ')).toContain('h001');
      });

      it('rejects blank input', () => {
        expect(() => helper001('   ')).toThrow('helper001 requires a non-empty input');
      });
    });
