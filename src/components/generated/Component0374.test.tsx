import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0374 } from './Component0374';
    import { helper090 } from '../../helpers/helper090';

    describe('Component0374', () => {
      it('applies helper090 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0374 label="Generated 0374" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0374' }));

        expect(onApply).toHaveBeenCalledWith(helper090('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0374 label="Generated 0374" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0374' })).toBeDisabled();
      });
    });
