import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0200 } from './Component0200';
    import { helper035 } from '../../helpers/helper035';

    describe('Component0200', () => {
      it('applies helper035 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0200 label="Generated 0200" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0200' }));

        expect(onApply).toHaveBeenCalledWith(helper035('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0200 label="Generated 0200" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0200' })).toBeDisabled();
      });
    });
