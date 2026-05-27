import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0661 } from './Component0661';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0661', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0661 label="Generated 0661" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0661' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0661 label="Generated 0661" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0661' })).toBeDisabled();
      });
    });
