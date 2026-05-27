import { helper026 } from './helper026';

    describe('helper026', () => {
      it('transforms valid input', () => {
        expect(helper026(' Sample Input ')).toContain('h026');
      });

      it('rejects blank input', () => {
        expect(() => helper026('   ')).toThrow('helper026 requires a non-empty input');
      });
    });
