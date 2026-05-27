import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0923 } from './Component0923';
    import { helper041 } from '../../helpers/helper041';

    describe('Component0923', () => {
      it('applies helper041 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0923 label="Generated 0923" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0923' }));

        expect(onApply).toHaveBeenCalledWith(helper041('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0923 label="Generated 0923" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0923' })).toBeDisabled();
      });
    });
