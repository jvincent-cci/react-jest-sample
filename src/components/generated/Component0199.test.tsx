import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0199 } from './Component0199';
    import { helper011 } from '../../helpers/helper011';

    describe('Component0199', () => {
      it('applies helper011 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0199 label="Generated 0199" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0199' }));

        expect(onApply).toHaveBeenCalledWith(helper011('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0199 label="Generated 0199" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0199' })).toBeDisabled();
      });
    });
