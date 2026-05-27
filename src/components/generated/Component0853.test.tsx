import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0853 } from './Component0853';
    import { helper012 } from '../../helpers/helper012';

    describe('Component0853', () => {
      it('applies helper012 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0853 label="Generated 0853" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0853' }));

        expect(onApply).toHaveBeenCalledWith(helper012('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0853 label="Generated 0853" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0853' })).toBeDisabled();
      });
    });
