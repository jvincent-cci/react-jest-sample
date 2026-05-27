import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0055 } from './Component0055';
    import { helper034 } from '../../helpers/helper034';

    describe('Component0055', () => {
      it('applies helper034 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0055 label="Generated 0055" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0055' }));

        expect(onApply).toHaveBeenCalledWith(helper034('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0055 label="Generated 0055" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0055' })).toBeDisabled();
      });
    });
