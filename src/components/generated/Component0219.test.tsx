import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0219 } from './Component0219';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0219', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0219 label="Generated 0219" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0219' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0219 label="Generated 0219" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0219' })).toBeDisabled();
      });
    });
