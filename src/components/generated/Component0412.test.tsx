import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0412 } from './Component0412';
    import { helper100 } from '../../helpers/helper100';

    describe('Component0412', () => {
      it('applies helper100 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0412 label="Generated 0412" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0412' }));

        expect(onApply).toHaveBeenCalledWith(helper100('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0412 label="Generated 0412" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0412' })).toBeDisabled();
      });
    });
