import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0528 } from './Component0528';
    import { helper012 } from '../../helpers/helper012';

    describe('Component0528', () => {
      it('applies helper012 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0528 label="Generated 0528" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0528' }));

        expect(onApply).toHaveBeenCalledWith(helper012('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0528 label="Generated 0528" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0528' })).toBeDisabled();
      });
    });
