import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0871 } from './Component0871';
    import { helper064 } from '../../helpers/helper064';

    describe('Component0871', () => {
      it('applies helper064 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0871 label="Generated 0871" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0871' }));

        expect(onApply).toHaveBeenCalledWith(helper064('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0871 label="Generated 0871" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0871' })).toBeDisabled();
      });
    });
