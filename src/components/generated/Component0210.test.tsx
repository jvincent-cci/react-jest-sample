import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0210 } from './Component0210';
    import { helper053 } from '../../helpers/helper053';

    describe('Component0210', () => {
      it('applies helper053 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0210 label="Generated 0210" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0210' }));

        expect(onApply).toHaveBeenCalledWith(helper053('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0210 label="Generated 0210" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0210' })).toBeDisabled();
      });
    });
