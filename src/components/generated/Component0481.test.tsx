import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0481 } from './Component0481';
    import { helper049 } from '../../helpers/helper049';

    describe('Component0481', () => {
      it('applies helper049 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0481 label="Generated 0481" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0481' }));

        expect(onApply).toHaveBeenCalledWith(helper049('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0481 label="Generated 0481" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0481' })).toBeDisabled();
      });
    });
