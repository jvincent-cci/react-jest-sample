import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0583 } from './Component0583';
    import { helper027 } from '../../helpers/helper027';

    describe('Component0583', () => {
      it('applies helper027 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0583 label="Generated 0583" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0583' }));

        expect(onApply).toHaveBeenCalledWith(helper027('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0583 label="Generated 0583" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0583' })).toBeDisabled();
      });
    });
