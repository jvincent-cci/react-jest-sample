import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0736 } from './Component0736';
    import { helper024 } from '../../helpers/helper024';

    describe('Component0736', () => {
      it('applies helper024 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0736 label="Generated 0736" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0736' }));

        expect(onApply).toHaveBeenCalledWith(helper024('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0736 label="Generated 0736" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0736' })).toBeDisabled();
      });
    });
