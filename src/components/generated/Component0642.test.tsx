import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0642 } from './Component0642';
    import { helper051 } from '../../helpers/helper051';

    describe('Component0642', () => {
      it('applies helper051 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0642 label="Generated 0642" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0642' }));

        expect(onApply).toHaveBeenCalledWith(helper051('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0642 label="Generated 0642" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0642' })).toBeDisabled();
      });
    });
