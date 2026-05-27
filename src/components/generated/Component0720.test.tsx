import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0720 } from './Component0720';
    import { helper015 } from '../../helpers/helper015';

    describe('Component0720', () => {
      it('applies helper015 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0720 label="Generated 0720" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0720' }));

        expect(onApply).toHaveBeenCalledWith(helper015('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0720 label="Generated 0720" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0720' })).toBeDisabled();
      });
    });
