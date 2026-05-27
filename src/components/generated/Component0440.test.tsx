import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0440 } from './Component0440';
    import { helper034 } from '../../helpers/helper034';

    describe('Component0440', () => {
      it('applies helper034 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0440 label="Generated 0440" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0440' }));

        expect(onApply).toHaveBeenCalledWith(helper034('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0440 label="Generated 0440" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0440' })).toBeDisabled();
      });
    });
