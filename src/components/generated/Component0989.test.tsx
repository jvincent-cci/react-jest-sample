import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0989 } from './Component0989';
    import { helper047 } from '../../helpers/helper047';

    describe('Component0989', () => {
      it('applies helper047 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0989 label="Generated 0989" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0989' }));

        expect(onApply).toHaveBeenCalledWith(helper047('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0989 label="Generated 0989" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0989' })).toBeDisabled();
      });
    });
