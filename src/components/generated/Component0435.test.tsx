import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0435 } from './Component0435';
    import { helper049 } from '../../helpers/helper049';

    describe('Component0435', () => {
      it('applies helper049 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0435 label="Generated 0435" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0435' }));

        expect(onApply).toHaveBeenCalledWith(helper049('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0435 label="Generated 0435" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0435' })).toBeDisabled();
      });
    });
