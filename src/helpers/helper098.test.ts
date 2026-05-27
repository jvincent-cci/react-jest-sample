import { helper098 } from './helper098';

    describe('helper098', () => {
      it('transforms valid input', () => {
        expect(helper098(' Sample Input ')).toContain('h098');
      });

      it('rejects blank input', () => {
        expect(() => helper098('   ')).toThrow('helper098 requires a non-empty input');
      });
    });
