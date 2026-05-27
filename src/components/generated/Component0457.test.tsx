import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0457 } from './Component0457';
    import { helper056 } from '../../helpers/helper056';

    describe('Component0457', () => {
      it('applies helper056 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0457 label="Generated 0457" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0457' }));

        expect(onApply).toHaveBeenCalledWith(helper056('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0457 label="Generated 0457" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0457' })).toBeDisabled();
      });
    });
