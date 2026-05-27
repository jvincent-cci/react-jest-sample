import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0777 } from './Component0777';
    import { helper001 } from '../../helpers/helper001';

    describe('Component0777', () => {
      it('applies helper001 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0777 label="Generated 0777" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0777' }));

        expect(onApply).toHaveBeenCalledWith(helper001('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0777 label="Generated 0777" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0777' })).toBeDisabled();
      });
    });
