import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0074 } from './Component0074';
    import { helper025 } from '../../helpers/helper025';

    describe('Component0074', () => {
      it('applies helper025 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0074 label="Generated 0074" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0074' }));

        expect(onApply).toHaveBeenCalledWith(helper025('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0074 label="Generated 0074" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0074' })).toBeDisabled();
      });
    });
