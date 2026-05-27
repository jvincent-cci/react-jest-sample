import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0428 } from './Component0428';
    import { helper053 } from '../../helpers/helper053';

    describe('Component0428', () => {
      it('applies helper053 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0428 label="Generated 0428" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0428' }));

        expect(onApply).toHaveBeenCalledWith(helper053('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0428 label="Generated 0428" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0428' })).toBeDisabled();
      });
    });
