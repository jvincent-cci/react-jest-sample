import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0803 } from './Component0803';
    import { helper010 } from '../../helpers/helper010';

    describe('Component0803', () => {
      it('applies helper010 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0803 label="Generated 0803" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0803' }));

        expect(onApply).toHaveBeenCalledWith(helper010('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0803 label="Generated 0803" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0803' })).toBeDisabled();
      });
    });
