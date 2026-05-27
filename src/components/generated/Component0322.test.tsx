import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0322 } from './Component0322';
    import { helper039 } from '../../helpers/helper039';

    describe('Component0322', () => {
      it('applies helper039 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0322 label="Generated 0322" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0322' }));

        expect(onApply).toHaveBeenCalledWith(helper039('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0322 label="Generated 0322" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0322' })).toBeDisabled();
      });
    });
