import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0441 } from './Component0441';
    import { helper060 } from '../../helpers/helper060';

    describe('Component0441', () => {
      it('applies helper060 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0441 label="Generated 0441" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0441' }));

        expect(onApply).toHaveBeenCalledWith(helper060('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0441 label="Generated 0441" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0441' })).toBeDisabled();
      });
    });
