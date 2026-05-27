import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0073 } from './Component0073';
    import { helper012 } from '../../helpers/helper012';

    describe('Component0073', () => {
      it('applies helper012 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0073 label="Generated 0073" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0073' }));

        expect(onApply).toHaveBeenCalledWith(helper012('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0073 label="Generated 0073" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0073' })).toBeDisabled();
      });
    });
