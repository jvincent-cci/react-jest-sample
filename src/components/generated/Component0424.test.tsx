import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0424 } from './Component0424';
    import { helper038 } from '../../helpers/helper038';

    describe('Component0424', () => {
      it('applies helper038 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0424 label="Generated 0424" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0424' }));

        expect(onApply).toHaveBeenCalledWith(helper038('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0424 label="Generated 0424" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0424' })).toBeDisabled();
      });
    });
