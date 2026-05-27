import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0862 } from './Component0862';
    import { helper059 } from '../../helpers/helper059';

    describe('Component0862', () => {
      it('applies helper059 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0862 label="Generated 0862" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0862' }));

        expect(onApply).toHaveBeenCalledWith(helper059('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0862 label="Generated 0862" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0862' })).toBeDisabled();
      });
    });
