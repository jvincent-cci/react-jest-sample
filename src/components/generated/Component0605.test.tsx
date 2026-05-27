import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0605 } from './Component0605';
    import { helper074 } from '../../helpers/helper074';

    describe('Component0605', () => {
      it('applies helper074 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0605 label="Generated 0605" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0605' }));

        expect(onApply).toHaveBeenCalledWith(helper074('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0605 label="Generated 0605" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0605' })).toBeDisabled();
      });
    });
