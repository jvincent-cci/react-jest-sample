import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0309 } from './Component0309';
    import { helper018 } from '../../helpers/helper018';

    describe('Component0309', () => {
      it('applies helper018 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0309 label="Generated 0309" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0309' }));

        expect(onApply).toHaveBeenCalledWith(helper018('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0309 label="Generated 0309" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0309' })).toBeDisabled();
      });
    });
