import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0332 } from './Component0332';
    import { helper021 } from '../../helpers/helper021';

    describe('Component0332', () => {
      it('applies helper021 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0332 label="Generated 0332" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0332' }));

        expect(onApply).toHaveBeenCalledWith(helper021('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0332 label="Generated 0332" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0332' })).toBeDisabled();
      });
    });
