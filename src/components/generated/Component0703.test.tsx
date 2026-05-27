import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0703 } from './Component0703';
    import { helper074 } from '../../helpers/helper074';

    describe('Component0703', () => {
      it('applies helper074 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0703 label="Generated 0703" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0703' }));

        expect(onApply).toHaveBeenCalledWith(helper074('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0703 label="Generated 0703" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0703' })).toBeDisabled();
      });
    });
