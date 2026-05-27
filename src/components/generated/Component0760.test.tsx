import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0760 } from './Component0760';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0760', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0760 label="Generated 0760" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0760' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0760 label="Generated 0760" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0760' })).toBeDisabled();
      });
    });
