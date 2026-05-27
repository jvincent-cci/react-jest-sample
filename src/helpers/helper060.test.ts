import { helper060 } from './helper060';

    describe('helper060', () => {
      it('transforms valid input', () => {
        expect(helper060(' Sample Input ')).toContain('h060');
      });

      it('rejects blank input', () => {
        expect(() => helper060('   ')).toThrow('helper060 requires a non-empty input');
      });
    });
