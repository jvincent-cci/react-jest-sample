import { helper018 } from './helper018';

    describe('helper018', () => {
      it('transforms valid input', () => {
        expect(helper018(' Sample Input ')).toContain('h018');
      });

      it('rejects blank input', () => {
        expect(() => helper018('   ')).toThrow('helper018 requires a non-empty input');
      });
    });
