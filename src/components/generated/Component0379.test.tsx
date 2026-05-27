import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0379 } from './Component0379';
    import { helper098 } from '../../helpers/helper098';

    describe('Component0379', () => {
      it('applies helper098 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0379 label="Generated 0379" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0379' }));

        expect(onApply).toHaveBeenCalledWith(helper098('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0379 label="Generated 0379" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0379' })).toBeDisabled();
      });
    });
