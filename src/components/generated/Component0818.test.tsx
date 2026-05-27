import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0818 } from './Component0818';
    import { helper050 } from '../../helpers/helper050';

    describe('Component0818', () => {
      it('applies helper050 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0818 label="Generated 0818" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0818' }));

        expect(onApply).toHaveBeenCalledWith(helper050('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0818 label="Generated 0818" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0818' })).toBeDisabled();
      });
    });
