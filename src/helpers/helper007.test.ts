import { helper007 } from './helper007';

    describe('helper007', () => {
      it('transforms valid input', () => {
        expect(helper007(' Sample Input ')).toContain('h007');
      });

      it('rejects blank input', () => {
        expect(() => helper007('   ')).toThrow('helper007 requires a non-empty input');
      });
    });
