import { helper051 } from './helper051';

    describe('helper051', () => {
      it('transforms valid input', () => {
        expect(helper051(' Sample Input ')).toContain('h051');
      });

      it('rejects blank input', () => {
        expect(() => helper051('   ')).toThrow('helper051 requires a non-empty input');
      });
    });
