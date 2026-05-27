import { helper097 } from './helper097';

    describe('helper097', () => {
      it('transforms valid input', () => {
        expect(helper097(' Sample Input ')).toContain('h097');
      });

      it('rejects blank input', () => {
        expect(() => helper097('   ')).toThrow('helper097 requires a non-empty input');
      });
    });
