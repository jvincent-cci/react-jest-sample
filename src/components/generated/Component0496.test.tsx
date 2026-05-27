import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0496 } from './Component0496';
    import { helper018 } from '../../helpers/helper018';

    describe('Component0496', () => {
      it('applies helper018 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0496 label="Generated 0496" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0496' }));

        expect(onApply).toHaveBeenCalledWith(helper018('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0496 label="Generated 0496" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0496' })).toBeDisabled();
      });
    });
