import { render, screen } from '@testing-library/react';
    import userEvent from '@testing-library/user-event';
    import { Component0774 } from './Component0774';
    import { helper014 } from '../../helpers/helper014';

    describe('Component0774', () => {
      it('applies helper014 to valid input', async () => {
        const user = userEvent.setup();
        const onApply = jest.fn();

        render(<Component0774 label="Generated 0774" value="hello world" onApply={onApply} />);
        await user.click(screen.getByRole('button', { name: 'Run Generated 0774' }));

        expect(onApply).toHaveBeenCalledWith(helper014('hello world'));
      });

      it('disables itself for blank input', () => {
        render(<Component0774 label="Generated 0774" value="   " onApply={jest.fn()} />);

        expect(screen.getByRole('button', { name: 'Run Generated 0774' })).toBeDisabled();
      });
    });
