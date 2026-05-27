import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0078 } from './Component0078';
    import { helper021 } from '../../helpers/helper021';

    describe('Component0078', () => {
      it('applies helper021 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0078 label="Generated 0078" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0078' }));

        expect(onApply).toHaveBeenCalledWith(helper021('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0078 label="Generated 0078" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0078' })).toBeDisabled();
      });
    });
