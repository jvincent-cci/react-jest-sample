import { helper090 } from './helper090';

    describe('helper090', () => {
      it('transforms valid input', () => {
        expect(helper090(' Sample Input ')).toContain('h090');
      });

      it('rejects blank input', () => {
        expect(() => helper090('   ')).toThrow('helper090 requires a non-empty input');
      });
    });
