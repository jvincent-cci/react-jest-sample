import { helper009 } from './helper009';

    describe('helper009', () => {
      it('transforms valid input', () => {
        expect(helper009(' Sample Input ')).toContain('h009');
      });

      it('rejects blank input', () => {
        expect(() => helper009('   ')).toThrow('helper009 requires a non-empty input');
      });
    });
