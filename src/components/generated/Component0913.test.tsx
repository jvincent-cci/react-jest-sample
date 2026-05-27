import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0913 } from './Component0913';
    import { helper063 } from '../../helpers/helper063';

    describe('Component0913', () => {
      it('applies helper063 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0913 label="Generated 0913" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0913' }));

        expect(onApply).toHaveBeenCalledWith(helper063('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0913 label="Generated 0913" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0913' })).toBeDisabled();
      });
    });
