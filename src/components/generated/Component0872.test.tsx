import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0872 } from './Component0872';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0872', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0872 label="Generated 0872" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0872' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0872 label="Generated 0872" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0872' })).toBeDisabled();
      });
    });
