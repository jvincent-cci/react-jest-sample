import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0494 } from './Component0494';
    import { helper038 } from '../../helpers/helper038';

    describe('Component0494', () => {
      it('applies helper038 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0494 label="Generated 0494" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0494' }));

        expect(onApply).toHaveBeenCalledWith(helper038('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0494 label="Generated 0494" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0494' })).toBeDisabled();
      });
    });
