import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0781 } from './Component0781';
    import { helper001 } from '../../helpers/helper001';

    describe('Component0781', () => {
      it('applies helper001 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0781 label="Generated 0781" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0781' }));

        expect(onApply).toHaveBeenCalledWith(helper001('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0781 label="Generated 0781" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0781' })).toBeDisabled();
      });
    });
