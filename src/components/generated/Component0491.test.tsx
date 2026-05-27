import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0491 } from './Component0491';
    import { helper035 } from '../../helpers/helper035';

    describe('Component0491', () => {
      it('applies helper035 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0491 label="Generated 0491" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0491' }));

        expect(onApply).toHaveBeenCalledWith(helper035('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0491 label="Generated 0491" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0491' })).toBeDisabled();
      });
    });
