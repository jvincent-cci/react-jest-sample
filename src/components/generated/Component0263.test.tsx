import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0263 } from './Component0263';
    import { helper080 } from '../../helpers/helper080';

    describe('Component0263', () => {
      it('applies helper080 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0263 label="Generated 0263" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0263' }));

        expect(onApply).toHaveBeenCalledWith(helper080('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0263 label="Generated 0263" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0263' })).toBeDisabled();
      });
    });
