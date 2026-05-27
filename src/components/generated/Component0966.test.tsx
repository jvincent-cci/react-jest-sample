import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0966 } from './Component0966';
    import { helper031 } from '../../helpers/helper031';

    describe('Component0966', () => {
      it('applies helper031 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0966 label="Generated 0966" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0966' }));

        expect(onApply).toHaveBeenCalledWith(helper031('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0966 label="Generated 0966" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0966' })).toBeDisabled();
      });
    });
