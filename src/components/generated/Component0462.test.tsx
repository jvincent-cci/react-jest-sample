import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0462 } from './Component0462';
    import { helper007 } from '../../helpers/helper007';

    describe('Component0462', () => {
      it('applies helper007 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0462 label="Generated 0462" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0462' }));

        expect(onApply).toHaveBeenCalledWith(helper007('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0462 label="Generated 0462" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0462' })).toBeDisabled();
      });
    });
