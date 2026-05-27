import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0232 } from './Component0232';
    import { helper050 } from '../../helpers/helper050';

    describe('Component0232', () => {
      it('applies helper050 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0232 label="Generated 0232" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0232' }));

        expect(onApply).toHaveBeenCalledWith(helper050('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0232 label="Generated 0232" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0232' })).toBeDisabled();
      });
    });
