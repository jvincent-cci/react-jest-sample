import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0369 } from './Component0369';
    import { helper100 } from '../../helpers/helper100';

    describe('Component0369', () => {
      it('applies helper100 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0369 label="Generated 0369" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0369' }));

        expect(onApply).toHaveBeenCalledWith(helper100('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0369 label="Generated 0369" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0369' })).toBeDisabled();
      });
    });
