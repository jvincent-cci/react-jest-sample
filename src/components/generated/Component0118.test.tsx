import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0118 } from './Component0118';
    import { helper061 } from '../../helpers/helper061';

    describe('Component0118', () => {
      it('applies helper061 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0118 label="Generated 0118" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0118' }));

        expect(onApply).toHaveBeenCalledWith(helper061('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0118 label="Generated 0118" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0118' })).toBeDisabled();
      });
    });
