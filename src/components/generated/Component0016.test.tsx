import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0016 } from './Component0016';
    import { helper010 } from '../../helpers/helper010';

    describe('Component0016', () => {
      it('applies helper010 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0016 label="Generated 0016" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0016' }));

        expect(onApply).toHaveBeenCalledWith(helper010('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0016 label="Generated 0016" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0016' })).toBeDisabled();
      });
    });
