import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0044 } from './Component0044';
    import { helper020 } from '../../helpers/helper020';

    describe('Component0044', () => {
      it('applies helper020 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0044 label="Generated 0044" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0044' }));

        expect(onApply).toHaveBeenCalledWith(helper020('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0044 label="Generated 0044" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0044' })).toBeDisabled();
      });
    });
