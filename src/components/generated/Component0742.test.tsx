import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0742 } from './Component0742';
    import { helper100 } from '../../helpers/helper100';

    describe('Component0742', () => {
      it('applies helper100 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0742 label="Generated 0742" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0742' }));

        expect(onApply).toHaveBeenCalledWith(helper100('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0742 label="Generated 0742" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0742' })).toBeDisabled();
      });
    });
