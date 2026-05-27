import { helper014 } from './helper014';

    describe('helper014', () => {
      it('transforms valid input', () => {
        expect(helper014(' Sample Input ')).toContain('h014');
      });

      it('rejects blank input', () => {
        expect(() => helper014('   ')).toThrow('helper014 requires a non-empty input');
      });
    });
