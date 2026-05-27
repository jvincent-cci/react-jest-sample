import { helper006 } from './helper006';

    describe('helper006', () => {
      it('transforms valid input', () => {
        expect(helper006(' Sample Input ')).toContain('h006');
      });

      it('rejects blank input', () => {
        expect(() => helper006('   ')).toThrow('helper006 requires a non-empty input');
      });
    });
