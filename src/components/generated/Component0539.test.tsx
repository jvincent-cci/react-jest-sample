import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0539 } from './Component0539';
    import { helper073 } from '../../helpers/helper073';

    describe('Component0539', () => {
      it('applies helper073 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0539 label="Generated 0539" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0539' }));

        expect(onApply).toHaveBeenCalledWith(helper073('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0539 label="Generated 0539" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0539' })).toBeDisabled();
      });
    });
