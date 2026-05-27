import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0859 } from './Component0859';
    import { helper089 } from '../../helpers/helper089';

    describe('Component0859', () => {
      it('applies helper089 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0859 label="Generated 0859" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0859' }));

        expect(onApply).toHaveBeenCalledWith(helper089('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0859 label="Generated 0859" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0859' })).toBeDisabled();
      });
    });
