import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0327 } from './Component0327';
    import { helper096 } from '../../helpers/helper096';

    describe('Component0327', () => {
      it('applies helper096 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0327 label="Generated 0327" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0327' }));

        expect(onApply).toHaveBeenCalledWith(helper096('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0327 label="Generated 0327" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0327' })).toBeDisabled();
      });
    });
