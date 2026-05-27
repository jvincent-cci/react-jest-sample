import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0810 } from './Component0810';
    import { helper040 } from '../../helpers/helper040';

    describe('Component0810', () => {
      it('applies helper040 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0810 label="Generated 0810" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0810' }));

        expect(onApply).toHaveBeenCalledWith(helper040('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0810 label="Generated 0810" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0810' })).toBeDisabled();
      });
    });
