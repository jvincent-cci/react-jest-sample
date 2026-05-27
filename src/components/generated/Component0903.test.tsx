import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0903 } from './Component0903';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0903', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0903 label="Generated 0903" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0903' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0903 label="Generated 0903" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0903' })).toBeDisabled();
      });
    });
