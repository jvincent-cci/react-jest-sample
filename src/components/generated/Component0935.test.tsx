import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0935 } from './Component0935';
    import { helper006 } from '../../helpers/helper006';

    describe('Component0935', () => {
      it('applies helper006 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0935 label="Generated 0935" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0935' }));

        expect(onApply).toHaveBeenCalledWith(helper006('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0935 label="Generated 0935" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0935' })).toBeDisabled();
      });
    });
