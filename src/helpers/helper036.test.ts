import { helper036 } from './helper036';

    describe('helper036', () => {
      it('transforms valid input', () => {
        expect(helper036(' Sample Input ')).toContain('h036');
      });

      it('rejects blank input', () => {
        expect(() => helper036('   ')).toThrow('helper036 requires a non-empty input');
      });
    });
