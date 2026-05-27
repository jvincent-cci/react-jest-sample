import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0628 } from './Component0628';
    import { helper071 } from '../../helpers/helper071';

    describe('Component0628', () => {
      it('applies helper071 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0628 label="Generated 0628" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0628' }));

        expect(onApply).toHaveBeenCalledWith(helper071('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0628 label="Generated 0628" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0628' })).toBeDisabled();
      });
    });
