import { helper015 } from './helper015';

    describe('helper015', () => {
      it('transforms valid input', () => {
        expect(helper015(' Sample Input ')).toContain('h015');
      });

      it('rejects blank input', () => {
        expect(() => helper015('   ')).toThrow('helper015 requires a non-empty input');
      });
    });
