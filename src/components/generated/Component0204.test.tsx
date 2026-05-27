import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0204 } from './Component0204';
    import { helper083 } from '../../helpers/helper083';

    describe('Component0204', () => {
      it('applies helper083 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0204 label="Generated 0204" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0204' }));

        expect(onApply).toHaveBeenCalledWith(helper083('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0204 label="Generated 0204" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0204' })).toBeDisabled();
      });
    });
