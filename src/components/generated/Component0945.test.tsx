import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0945 } from './Component0945';
    import { helper035 } from '../../helpers/helper035';

    describe('Component0945', () => {
      it('applies helper035 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0945 label="Generated 0945" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0945' }));

        expect(onApply).toHaveBeenCalledWith(helper035('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0945 label="Generated 0945" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0945' })).toBeDisabled();
      });
    });
