import { helper100 } from './helper100';

    describe('helper100', () => {
      it('transforms valid input', () => {
        expect(helper100(' Sample Input ')).toContain('h100');
      });

      it('rejects blank input', () => {
        expect(() => helper100('   ')).toThrow('helper100 requires a non-empty input');
      });
    });
