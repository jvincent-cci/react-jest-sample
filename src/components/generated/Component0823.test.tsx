import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0823 } from './Component0823';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0823', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0823 label="Generated 0823" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0823' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0823 label="Generated 0823" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0823' })).toBeDisabled();
      });
    });
