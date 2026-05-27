import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0058 } from './Component0058';
    import { helper020 } from '../../helpers/helper020';

    describe('Component0058', () => {
      it('applies helper020 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0058 label="Generated 0058" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0058' }));

        expect(onApply).toHaveBeenCalledWith(helper020('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0058 label="Generated 0058" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0058' })).toBeDisabled();
      });
    });
