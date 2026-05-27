import { helper017 } from './helper017';

    describe('helper017', () => {
      it('transforms valid input', () => {
        expect(helper017(' Sample Input ')).toContain('h017');
      });

      it('rejects blank input', () => {
        expect(() => helper017('   ')).toThrow('helper017 requires a non-empty input');
      });
    });
