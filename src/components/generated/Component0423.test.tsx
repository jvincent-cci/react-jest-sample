import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0423 } from './Component0423';
    import { helper066 } from '../../helpers/helper066';

    describe('Component0423', () => {
      it('applies helper066 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0423 label="Generated 0423" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0423' }));

        expect(onApply).toHaveBeenCalledWith(helper066('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0423 label="Generated 0423" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0423' })).toBeDisabled();
      });
    });
