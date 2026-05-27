import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0666 } from './Component0666';
    import { helper052 } from '../../helpers/helper052';

    describe('Component0666', () => {
      it('applies helper052 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0666 label="Generated 0666" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0666' }));

        expect(onApply).toHaveBeenCalledWith(helper052('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0666 label="Generated 0666" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0666' })).toBeDisabled();
      });
    });
