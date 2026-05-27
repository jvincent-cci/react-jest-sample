import { helper030 } from './helper030';

    describe('helper030', () => {
      it('transforms valid input', () => {
        expect(helper030(' Sample Input ')).toContain('h030');
      });

      it('rejects blank input', () => {
        expect(() => helper030('   ')).toThrow('helper030 requires a non-empty input');
      });
    });
