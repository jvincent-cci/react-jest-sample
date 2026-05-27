import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0604 } from './Component0604';
    import { helper034 } from '../../helpers/helper034';

    describe('Component0604', () => {
      it('applies helper034 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0604 label="Generated 0604" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0604' }));

        expect(onApply).toHaveBeenCalledWith(helper034('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0604 label="Generated 0604" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0604' })).toBeDisabled();
      });
    });
