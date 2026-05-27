import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0405 } from './Component0405';
    import { helper013 } from '../../helpers/helper013';

    describe('Component0405', () => {
      it('applies helper013 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0405 label="Generated 0405" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0405' }));

        expect(onApply).toHaveBeenCalledWith(helper013('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0405 label="Generated 0405" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0405' })).toBeDisabled();
      });
    });
