import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0298 } from './Component0298';
    import { helper010 } from '../../helpers/helper010';

    describe('Component0298', () => {
      it('applies helper010 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0298 label="Generated 0298" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0298' }));

        expect(onApply).toHaveBeenCalledWith(helper010('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0298 label="Generated 0298" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0298' })).toBeDisabled();
      });
    });
