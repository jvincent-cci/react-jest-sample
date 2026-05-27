import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0576 } from './Component0576';
    import { helper087 } from '../../helpers/helper087';

    describe('Component0576', () => {
      it('applies helper087 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0576 label="Generated 0576" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0576' }));

        expect(onApply).toHaveBeenCalledWith(helper087('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0576 label="Generated 0576" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0576' })).toBeDisabled();
      });
    });
