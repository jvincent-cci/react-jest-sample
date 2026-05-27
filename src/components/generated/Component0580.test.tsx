import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0580 } from './Component0580';
    import { helper050 } from '../../helpers/helper050';

    describe('Component0580', () => {
      it('applies helper050 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0580 label="Generated 0580" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0580' }));

        expect(onApply).toHaveBeenCalledWith(helper050('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0580 label="Generated 0580" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0580' })).toBeDisabled();
      });
    });
