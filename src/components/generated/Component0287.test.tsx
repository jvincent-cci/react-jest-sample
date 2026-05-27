import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0287 } from './Component0287';
    import { helper031 } from '../../helpers/helper031';

    describe('Component0287', () => {
      it('applies helper031 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0287 label="Generated 0287" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0287' }));

        expect(onApply).toHaveBeenCalledWith(helper031('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0287 label="Generated 0287" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0287' })).toBeDisabled();
      });
    });
