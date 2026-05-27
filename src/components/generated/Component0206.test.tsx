import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0206 } from './Component0206';
    import { helper070 } from '../../helpers/helper070';

    describe('Component0206', () => {
      it('applies helper070 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0206 label="Generated 0206" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0206' }));

        expect(onApply).toHaveBeenCalledWith(helper070('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0206 label="Generated 0206" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0206' })).toBeDisabled();
      });
    });
