import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0353 } from './Component0353';
    import { helper048 } from '../../helpers/helper048';

    describe('Component0353', () => {
      it('applies helper048 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0353 label="Generated 0353" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0353' }));

        expect(onApply).toHaveBeenCalledWith(helper048('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0353 label="Generated 0353" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0353' })).toBeDisabled();
      });
    });
