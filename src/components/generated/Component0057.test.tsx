import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0057 } from './Component0057';
    import { helper096 } from '../../helpers/helper096';

    describe('Component0057', () => {
      it('applies helper096 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0057 label="Generated 0057" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0057' }));

        expect(onApply).toHaveBeenCalledWith(helper096('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0057 label="Generated 0057" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0057' })).toBeDisabled();
      });
    });
