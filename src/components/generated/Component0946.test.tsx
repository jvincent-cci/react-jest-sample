import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0946 } from './Component0946';
    import { helper070 } from '../../helpers/helper070';

    describe('Component0946', () => {
      it('applies helper070 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0946 label="Generated 0946" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0946' }));

        expect(onApply).toHaveBeenCalledWith(helper070('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0946 label="Generated 0946" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0946' })).toBeDisabled();
      });
    });
