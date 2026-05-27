import { helper023 } from './helper023';

    describe('helper023', () => {
      it('transforms valid input', () => {
        expect(helper023(' Sample Input ')).toContain('h023');
      });

      it('rejects blank input', () => {
        expect(() => helper023('   ')).toThrow('helper023 requires a non-empty input');
      });
    });
