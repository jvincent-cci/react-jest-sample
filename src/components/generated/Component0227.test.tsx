import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0227 } from './Component0227';
    import { helper039 } from '../../helpers/helper039';

    describe('Component0227', () => {
      it('applies helper039 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0227 label="Generated 0227" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0227' }));

        expect(onApply).toHaveBeenCalledWith(helper039('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0227 label="Generated 0227" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0227' })).toBeDisabled();
      });
    });
