import { helper027 } from './helper027';

    describe('helper027', () => {
      it('transforms valid input', () => {
        expect(helper027(' Sample Input ')).toContain('h027');
      });

      it('rejects blank input', () => {
        expect(() => helper027('   ')).toThrow('helper027 requires a non-empty input');
      });
    });
