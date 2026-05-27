import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0235 } from './Component0235';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0235', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0235 label="Generated 0235" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0235' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0235 label="Generated 0235" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0235' })).toBeDisabled();
      });
    });
