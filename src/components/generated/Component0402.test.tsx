import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0402 } from './Component0402';
    import { helper048 } from '../../helpers/helper048';

    describe('Component0402', () => {
      it('applies helper048 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0402 label="Generated 0402" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0402' }));

        expect(onApply).toHaveBeenCalledWith(helper048('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0402 label="Generated 0402" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0402' })).toBeDisabled();
      });
    });
