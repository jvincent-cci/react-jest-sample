import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0401 } from './Component0401';
    import { helper080 } from '../../helpers/helper080';

    describe('Component0401', () => {
      it('applies helper080 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0401 label="Generated 0401" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0401' }));

        expect(onApply).toHaveBeenCalledWith(helper080('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0401 label="Generated 0401" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0401' })).toBeDisabled();
      });
    });
