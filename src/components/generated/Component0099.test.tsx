import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0099 } from './Component0099';
    import { helper017 } from '../../helpers/helper017';

    describe('Component0099', () => {
      it('applies helper017 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0099 label="Generated 0099" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0099' }));

        expect(onApply).toHaveBeenCalledWith(helper017('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0099 label="Generated 0099" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0099' })).toBeDisabled();
      });
    });
