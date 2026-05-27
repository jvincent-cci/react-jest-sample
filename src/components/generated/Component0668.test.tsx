import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0668 } from './Component0668';
    import { helper018 } from '../../helpers/helper018';

    describe('Component0668', () => {
      it('applies helper018 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0668 label="Generated 0668" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0668' }));

        expect(onApply).toHaveBeenCalledWith(helper018('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0668 label="Generated 0668" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0668' })).toBeDisabled();
      });
    });
