import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0244 } from './Component0244';
    import { helper088 } from '../../helpers/helper088';

    describe('Component0244', () => {
      it('applies helper088 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0244 label="Generated 0244" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0244' }));

        expect(onApply).toHaveBeenCalledWith(helper088('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0244 label="Generated 0244" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0244' })).toBeDisabled();
      });
    });
