import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0039 } from './Component0039';
    import { helper072 } from '../../helpers/helper072';

    describe('Component0039', () => {
      it('applies helper072 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0039 label="Generated 0039" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0039' }));

        expect(onApply).toHaveBeenCalledWith(helper072('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0039 label="Generated 0039" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0039' })).toBeDisabled();
      });
    });
