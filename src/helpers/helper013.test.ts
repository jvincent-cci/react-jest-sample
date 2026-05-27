import { helper013 } from './helper013';

    describe('helper013', () => {
      it('transforms valid input', () => {
        expect(helper013(' Sample Input ')).toContain('h013');
      });

      it('rejects blank input', () => {
        expect(() => helper013('   ')).toThrow('helper013 requires a non-empty input');
      });
    });
