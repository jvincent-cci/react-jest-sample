import { helper041 } from './helper041';

    describe('helper041', () => {
      it('transforms valid input', () => {
        expect(helper041(' Sample Input ')).toContain('h041');
      });

      it('rejects blank input', () => {
        expect(() => helper041('   ')).toThrow('helper041 requires a non-empty input');
      });
    });
