import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0134 } from './Component0134';
    import { helper071 } from '../../helpers/helper071';

    describe('Component0134', () => {
      it('applies helper071 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0134 label="Generated 0134" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0134' }));

        expect(onApply).toHaveBeenCalledWith(helper071('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0134 label="Generated 0134" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0134' })).toBeDisabled();
      });
    });
