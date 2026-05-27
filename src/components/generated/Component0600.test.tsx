import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0600 } from './Component0600';
    import { helper053 } from '../../helpers/helper053';

    describe('Component0600', () => {
      it('applies helper053 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0600 label="Generated 0600" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0600' }));

        expect(onApply).toHaveBeenCalledWith(helper053('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0600 label="Generated 0600" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0600' })).toBeDisabled();
      });
    });
