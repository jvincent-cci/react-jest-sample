import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0675 } from './Component0675';
    import { helper072 } from '../../helpers/helper072';

    describe('Component0675', () => {
      it('applies helper072 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0675 label="Generated 0675" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0675' }));

        expect(onApply).toHaveBeenCalledWith(helper072('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0675 label="Generated 0675" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0675' })).toBeDisabled();
      });
    });
