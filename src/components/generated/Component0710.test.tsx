import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0710 } from './Component0710';
    import { helper002 } from '../../helpers/helper002';

    describe('Component0710', () => {
      it('applies helper002 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0710 label="Generated 0710" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0710' }));

        expect(onApply).toHaveBeenCalledWith(helper002('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0710 label="Generated 0710" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0710' })).toBeDisabled();
      });
    });
