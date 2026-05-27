import { helper050 } from './helper050';

    describe('helper050', () => {
      it('transforms valid input', () => {
        expect(helper050(' Sample Input ')).toContain('h050');
      });

      it('rejects blank input', () => {
        expect(() => helper050('   ')).toThrow('helper050 requires a non-empty input');
      });
    });
