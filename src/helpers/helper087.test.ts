import { helper087 } from './helper087';

    describe('helper087', () => {
      it('transforms valid input', () => {
        expect(helper087(' Sample Input ')).toContain('h087');
      });

      it('rejects blank input', () => {
        expect(() => helper087('   ')).toThrow('helper087 requires a non-empty input');
      });
    });
