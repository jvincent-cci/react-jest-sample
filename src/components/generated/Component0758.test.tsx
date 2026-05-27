import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0758 } from './Component0758';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0758', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0758 label="Generated 0758" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0758' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0758 label="Generated 0758" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0758' })).toBeDisabled();
      });
    });
