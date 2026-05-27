import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0342 } from './Component0342';
    import { helper076 } from '../../helpers/helper076';

    describe('Component0342', () => {
      it('applies helper076 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0342 label="Generated 0342" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0342' }));

        expect(onApply).toHaveBeenCalledWith(helper076('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0342 label="Generated 0342" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0342' })).toBeDisabled();
      });
    });
