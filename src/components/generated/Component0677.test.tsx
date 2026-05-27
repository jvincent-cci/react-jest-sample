import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0677 } from './Component0677';
    import { helper008 } from '../../helpers/helper008';

    describe('Component0677', () => {
      it('applies helper008 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0677 label="Generated 0677" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0677' }));

        expect(onApply).toHaveBeenCalledWith(helper008('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0677 label="Generated 0677" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0677' })).toBeDisabled();
      });
    });
