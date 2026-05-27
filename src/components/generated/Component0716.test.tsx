import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0716 } from './Component0716';
    import { helper011 } from '../../helpers/helper011';

    describe('Component0716', () => {
      it('applies helper011 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0716 label="Generated 0716" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0716' }));

        expect(onApply).toHaveBeenCalledWith(helper011('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0716 label="Generated 0716" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0716' })).toBeDisabled();
      });
    });
