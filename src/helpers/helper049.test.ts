import { helper049 } from './helper049';

    describe('helper049', () => {
      it('transforms valid input', () => {
        expect(helper049(' Sample Input ')).toContain('h049');
      });

      it('rejects blank input', () => {
        expect(() => helper049('   ')).toThrow('helper049 requires a non-empty input');
      });
    });
