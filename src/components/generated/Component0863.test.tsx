import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0863 } from './Component0863';
    import { helper088 } from '../../helpers/helper088';

    describe('Component0863', () => {
      it('applies helper088 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0863 label="Generated 0863" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0863' }));

        expect(onApply).toHaveBeenCalledWith(helper088('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0863 label="Generated 0863" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0863' })).toBeDisabled();
      });
    });
