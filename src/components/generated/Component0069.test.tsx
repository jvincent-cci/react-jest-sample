import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0069 } from './Component0069';
    import { helper072 } from '../../helpers/helper072';

    describe('Component0069', () => {
      it('applies helper072 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0069 label="Generated 0069" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0069' }));

        expect(onApply).toHaveBeenCalledWith(helper072('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0069 label="Generated 0069" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0069' })).toBeDisabled();
      });
    });
