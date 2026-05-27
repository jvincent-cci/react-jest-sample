import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0817 } from './Component0817';
    import { helper011 } from '../../helpers/helper011';

    describe('Component0817', () => {
      it('applies helper011 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0817 label="Generated 0817" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0817' }));

        expect(onApply).toHaveBeenCalledWith(helper011('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0817 label="Generated 0817" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0817' })).toBeDisabled();
      });
    });
