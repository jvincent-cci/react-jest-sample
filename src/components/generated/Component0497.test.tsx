import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0497 } from './Component0497';
    import { helper086 } from '../../helpers/helper086';

    describe('Component0497', () => {
      it('applies helper086 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0497 label="Generated 0497" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0497' }));

        expect(onApply).toHaveBeenCalledWith(helper086('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0497 label="Generated 0497" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0497' })).toBeDisabled();
      });
    });
