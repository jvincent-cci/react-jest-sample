import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0326 } from './Component0326';
    import { helper093 } from '../../helpers/helper093';

    describe('Component0326', () => {
      it('applies helper093 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0326 label="Generated 0326" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0326' }));

        expect(onApply).toHaveBeenCalledWith(helper093('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0326 label="Generated 0326" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0326' })).toBeDisabled();
      });
    });
