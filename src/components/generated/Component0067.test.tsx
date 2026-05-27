import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0067 } from './Component0067';
    import { helper081 } from '../../helpers/helper081';

    describe('Component0067', () => {
      it('applies helper081 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0067 label="Generated 0067" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0067' }));

        expect(onApply).toHaveBeenCalledWith(helper081('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0067 label="Generated 0067" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0067' })).toBeDisabled();
      });
    });
