import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0573 } from './Component0573';
    import { helper093 } from '../../helpers/helper093';

    describe('Component0573', () => {
      it('applies helper093 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0573 label="Generated 0573" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0573' }));

        expect(onApply).toHaveBeenCalledWith(helper093('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0573 label="Generated 0573" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0573' })).toBeDisabled();
      });
    });
