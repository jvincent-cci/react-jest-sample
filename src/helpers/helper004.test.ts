import { helper004 } from './helper004';

    describe('helper004', () => {
      it('transforms valid input', () => {
        expect(helper004(' Sample Input ')).toContain('h004');
      });

      it('rejects blank input', () => {
        expect(() => helper004('   ')).toThrow('helper004 requires a non-empty input');
      });
    });
