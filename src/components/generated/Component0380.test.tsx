import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0380 } from './Component0380';
    import { helper035 } from '../../helpers/helper035';

    describe('Component0380', () => {
      it('applies helper035 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0380 label="Generated 0380" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0380' }));

        expect(onApply).toHaveBeenCalledWith(helper035('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0380 label="Generated 0380" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0380' })).toBeDisabled();
      });
    });
