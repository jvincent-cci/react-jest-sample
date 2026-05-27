import { helper020 } from './helper020';

    describe('helper020', () => {
      it('transforms valid input', () => {
        expect(helper020(' Sample Input ')).toContain('h020');
      });

      it('rejects blank input', () => {
        expect(() => helper020('   ')).toThrow('helper020 requires a non-empty input');
      });
    });
