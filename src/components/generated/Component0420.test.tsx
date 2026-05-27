import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0420 } from './Component0420';
    import { helper088 } from '../../helpers/helper088';

    describe('Component0420', () => {
      it('applies helper088 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0420 label="Generated 0420" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0420' }));

        expect(onApply).toHaveBeenCalledWith(helper088('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0420 label="Generated 0420" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0420' })).toBeDisabled();
      });
    });
