import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0313 } from './Component0313';
    import { helper045 } from '../../helpers/helper045';

    describe('Component0313', () => {
      it('applies helper045 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0313 label="Generated 0313" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0313' }));

        expect(onApply).toHaveBeenCalledWith(helper045('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0313 label="Generated 0313" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0313' })).toBeDisabled();
      });
    });
