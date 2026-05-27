import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0711 } from './Component0711';
    import { helper075 } from '../../helpers/helper075';

    describe('Component0711', () => {
      it('applies helper075 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0711 label="Generated 0711" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0711' }));

        expect(onApply).toHaveBeenCalledWith(helper075('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0711 label="Generated 0711" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0711' })).toBeDisabled();
      });
    });
