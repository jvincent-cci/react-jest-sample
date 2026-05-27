import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0467 } from './Component0467';
    import { helper026 } from '../../helpers/helper026';

    describe('Component0467', () => {
      it('applies helper026 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0467 label="Generated 0467" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0467' }));

        expect(onApply).toHaveBeenCalledWith(helper026('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0467 label="Generated 0467" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0467' })).toBeDisabled();
      });
    });
