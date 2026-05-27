import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0151 } from './Component0151';
    import { helper073 } from '../../helpers/helper073';

    describe('Component0151', () => {
      it('applies helper073 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0151 label="Generated 0151" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0151' }));

        expect(onApply).toHaveBeenCalledWith(helper073('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0151 label="Generated 0151" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0151' })).toBeDisabled();
      });
    });
