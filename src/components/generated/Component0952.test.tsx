import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0952 } from './Component0952';
    import { helper064 } from '../../helpers/helper064';

    describe('Component0952', () => {
      it('applies helper064 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0952 label="Generated 0952" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0952' }));

        expect(onApply).toHaveBeenCalledWith(helper064('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0952 label="Generated 0952" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0952' })).toBeDisabled();
      });
    });
