import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0028 } from './Component0028';
    import { helper083 } from '../../helpers/helper083';

    describe('Component0028', () => {
      it('applies helper083 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0028 label="Generated 0028" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0028' }));

        expect(onApply).toHaveBeenCalledWith(helper083('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0028 label="Generated 0028" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0028' })).toBeDisabled();
      });
    });
