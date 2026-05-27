import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0094 } from './Component0094';
    import { helper005 } from '../../helpers/helper005';

    describe('Component0094', () => {
      it('applies helper005 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0094 label="Generated 0094" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0094' }));

        expect(onApply).toHaveBeenCalledWith(helper005('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0094 label="Generated 0094" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0094' })).toBeDisabled();
      });
    });
