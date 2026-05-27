import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0465 } from './Component0465';
    import { helper089 } from '../../helpers/helper089';

    describe('Component0465', () => {
      it('applies helper089 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0465 label="Generated 0465" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0465' }));

        expect(onApply).toHaveBeenCalledWith(helper089('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0465 label="Generated 0465" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0465' })).toBeDisabled();
      });
    });
