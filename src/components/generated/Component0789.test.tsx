import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0789 } from './Component0789';
    import { helper008 } from '../../helpers/helper008';

    describe('Component0789', () => {
      it('applies helper008 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0789 label="Generated 0789" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0789' }));

        expect(onApply).toHaveBeenCalledWith(helper008('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0789 label="Generated 0789" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0789' })).toBeDisabled();
      });
    });
