import { helper066 } from './helper066';

    describe('helper066', () => {
      it('transforms valid input', () => {
        expect(helper066(' Sample Input ')).toContain('h066');
      });

      it('rejects blank input', () => {
        expect(() => helper066('   ')).toThrow('helper066 requires a non-empty input');
      });
    });
