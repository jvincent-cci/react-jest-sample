import { helper021 } from './helper021';

    describe('helper021', () => {
      it('transforms valid input', () => {
        expect(helper021(' Sample Input ')).toContain('h021');
      });

      it('rejects blank input', () => {
        expect(() => helper021('   ')).toThrow('helper021 requires a non-empty input');
      });
    });
