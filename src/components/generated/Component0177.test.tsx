import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0177 } from './Component0177';
    import { helper007 } from '../../helpers/helper007';

    describe('Component0177', () => {
      it('applies helper007 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0177 label="Generated 0177" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0177' }));

        expect(onApply).toHaveBeenCalledWith(helper007('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0177 label="Generated 0177" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0177' })).toBeDisabled();
      });
    });
