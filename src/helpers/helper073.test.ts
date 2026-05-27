import { helper073 } from './helper073';

    describe('helper073', () => {
      it('transforms valid input', () => {
        expect(helper073(' Sample Input ')).toContain('h073');
      });

      it('rejects blank input', () => {
        expect(() => helper073('   ')).toThrow('helper073 requires a non-empty input');
      });
    });
